"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, whatsappHref } from "../cta/constants";
import { pushEvent } from "../site/track";
import { CircleAlert, CircleCheck, WhatsAppIcon } from "../ui/icons";
import {
  DESTINATIONS,
  EMIRATES,
  MOVING_TYPES,
  type Emirate,
  type MovingType,
  type PageSlug,
} from "./options";
import {
  FIELD_ORDER,
  uaeToday,
  validateField,
  validateQuote,
  type QuoteErrors,
  type QuoteField,
  type QuoteInput,
} from "./validate";

type Props = {
  heading: string;
  footnote: string;
  page: PageSlug;
  whatsappMessage: string;
  defaultFrom?: Emirate;
  defaultType?: MovingType;
  submitLabel?: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const LABELS: Record<QuoteField, string> = {
  name: "Name",
  phone: "Phone number",
  from: "Moving from",
  to: "Moving to",
  type: "Moving type",
  date: "Moving date",
  message: "Message",
};

export default function QuoteForm({
  heading,
  footnote,
  page,
  whatsappMessage,
  defaultFrom,
  defaultType,
  submitLabel = "Get my price",
}: Props) {
  const uid = useId();
  const id = (f: string) => `${uid}-${f}`;
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<QuoteInput>({
    name: "",
    phone: "",
    from: defaultFrom ?? "",
    to: "",
    type: defaultType ?? "",
    date: "",
    message: "",
    page,
  });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [showSummary, setShowSummary] = useState(false);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  // Set date min after mount so server and client markup match.
  useEffect(() => {
    setMinDate(uaeToday());
    // No-JS fallback redirects back with ?sent=1
    if (new URLSearchParams(window.location.search).get("sent") === "1")
      setStatus("sent");
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  function update(field: QuoteField, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear an existing error as soon as the user corrects it; never add one while typing.
    if (errors[field] && !validateField(field, value)) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  function blur(field: QuoteField) {
    const value = values[field];
    // Tabbing past an untouched empty field is not an error yet; submit catches it.
    if (!value.trim() && !errors[field]) return;
    setErrors((e) => ({ ...e, [field]: validateField(field, value) }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const hp =
      (
        formRef.current?.elements.namedItem(
          "company",
        ) as HTMLInputElement | null
      )?.value ?? "";
    const found = validateQuote(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      setShowSummary(true);
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }
    setShowSummary(false);
    setStatus("sending");

    try {
      const res = await fetch("/api/lp-quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company: hp }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: QuoteErrors;
      };
      if (res.ok && data.ok) {
        pushEvent({
          event: "form_submit",
          form_page: page,
          moving_from: values.from,
          moving_to: values.to,
          moving_type: values.type,
        });
        setStatus("sent");
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        setShowSummary(true);
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const errorCount = FIELD_ORDER.filter((f) => errors[f]).length;

  return (
    <div
      id="quote"
      className="relative scroll-mt-24 rounded-card border border-line bg-white p-5 shadow-soft sm:p-7"
    >
      <span
        aria-hidden="true"
        className="lp-tape absolute inset-x-0 top-0 h-[6px] rounded-t-card"
      />
      <h2 className="!text-[24px] !leading-tight sm:!text-[28px]">{heading}</h2>

      {status === "sent" ? (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="mt-5 rounded-card border-2 border-ink bg-elevated p-5 outline-none"
        >
          <p className="flex items-center gap-2 font-head text-[20px] font-extrabold text-ink">
            <CircleCheck
              aria-hidden="true"
              className="h-6 w-6 shrink-0"
              strokeWidth={2.25}
            />
            Thank you. Your request is in.
          </p>
          <p className="mt-2 text-text">
            {footnote} Need us sooner? Call or WhatsApp now.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta-location="form-success"
              className="lp-btn lp-btn-wa"
            >
              <WhatsAppIcon />
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      ) : (
        <form
          ref={formRef}
          action="/api/lp-quote/"
          method="post"
          noValidate
          onSubmit={onSubmit}
          className="lp-form mt-5"
          aria-describedby={`${id("note")}`}
        >
          <input type="hidden" name="page" value={page} />

          {/* Honeypot: hidden from people, filled by bots */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor={id("company")}>Company</label>
            <input
              id={id("company")}
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div aria-live="assertive" className="empty:hidden">
            {showSummary && errorCount > 0 && (
              <p className="mb-4 flex items-start gap-2 rounded-card border border-[#b3261e] bg-[#fff6f5] px-3 py-2.5 text-[15px] font-semibold text-[#8c1d18]">
                <CircleAlert
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0"
                />
                {errorCount === 1
                  ? "Please check 1 field below."
                  : `Please check ${errorCount} fields below.`}
              </p>
            )}
          </div>

          <div className="lp-form-grid">
            <Field id={id("name")} label={LABELS.name} error={errors.name}>
              <input
                id={id("name")}
                name="name"
                type="text"
                autoComplete="name"
                enterKeyHint="next"
                required
                maxLength={80}
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                onBlur={() => blur("name")}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? `${id("name")}-err` : undefined}
                className="lp-input"
              />
            </Field>

            <Field id={id("phone")} label={LABELS.phone} error={errors.phone}>
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                enterKeyHint="next"
                required
                placeholder="05X XXX XXXX"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                onBlur={() => blur("phone")}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={
                  errors.phone ? `${id("phone")}-err` : undefined
                }
                className="lp-input"
              />
            </Field>

            <Field id={id("from")} label={LABELS.from} error={errors.from}>
              <select
                id={id("from")}
                name="from"
                required
                value={values.from}
                onChange={(e) => update("from", e.target.value)}
                onBlur={() => blur("from")}
                aria-invalid={errors.from ? true : undefined}
                aria-describedby={errors.from ? `${id("from")}-err` : undefined}
                className="lp-input"
              >
                <option value="" disabled>
                  Choose…
                </option>
                {EMIRATES.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field id={id("to")} label={LABELS.to} error={errors.to}>
              <select
                id={id("to")}
                name="to"
                required
                value={values.to}
                onChange={(e) => update("to", e.target.value)}
                onBlur={() => blur("to")}
                aria-invalid={errors.to ? true : undefined}
                aria-describedby={errors.to ? `${id("to")}-err` : undefined}
                className="lp-input"
              >
                <option value="" disabled>
                  Choose…
                </option>
                {DESTINATIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field id={id("type")} label={LABELS.type} error={errors.type}>
              <select
                id={id("type")}
                name="type"
                required
                value={values.type}
                onChange={(e) => update("type", e.target.value)}
                onBlur={() => blur("type")}
                aria-invalid={errors.type ? true : undefined}
                aria-describedby={errors.type ? `${id("type")}-err` : undefined}
                className="lp-input"
              >
                <option value="" disabled>
                  Choose…
                </option>
                {MOVING_TYPES.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field id={id("date")} label={LABELS.date} error={errors.date}>
              <input
                id={id("date")}
                name="date"
                type="date"
                required
                min={minDate}
                value={values.date}
                onChange={(e) => update("date", e.target.value)}
                onBlur={() => blur("date")}
                aria-invalid={errors.date ? true : undefined}
                aria-describedby={errors.date ? `${id("date")}-err` : undefined}
                className="lp-input"
              />
            </Field>

            <Field
              id={id("message")}
              label={LABELS.message}
              optional
              error={errors.message}
              className="lp-span-2"
            >
              <textarea
                id={id("message")}
                name="message"
                rows={2}
                maxLength={1000}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => blur("message")}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? `${id("message")}-err` : undefined
                }
                className="lp-input"
              />
            </Field>
          </div>

          {status === "error" && (
            <p
              role="alert"
              className="mt-4 flex items-start gap-2 rounded-card border border-[#b3261e] bg-[#fff6f5] px-3 py-2.5 text-[15px] font-semibold text-[#8c1d18]"
            >
              <CircleAlert
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <span>
                Sorry, that didn&apos;t go through. Please try again, or call us
                on{" "}
                <a
                  href={PHONE_TEL}
                  data-cta-location="form-error"
                  className="underline"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </span>
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="lp-btn lp-btn-call mt-5 min-h-[54px] w-full text-[18px] disabled:cursor-wait disabled:opacity-80"
          >
            {status === "sending" ? "Sending…" : submitLabel}
          </button>
          <p
            id={id("note")}
            className="mt-3 text-center text-[15px] text-muted"
          >
            {footnote}
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[15px] font-bold text-ink"
      >
        {label}
        {optional && (
          <span className="ml-1 font-semibold text-muted">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-err`}
          className="mt-1.5 flex items-start gap-1.5 text-[14px] font-semibold text-[#b3261e]"
        >
          <CircleAlert
            aria-hidden="true"
            className="mt-[3px] h-4 w-4 shrink-0"
          />
          {error}
        </p>
      )}
    </div>
  );
}
