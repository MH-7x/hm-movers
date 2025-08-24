import * as React from "react";

interface EmailTemplateProps {
  name: string | null;
  phone: string | null;
  address: string | null;
  services: string | null;
  message: string | null;
}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  address,
  services,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Order</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img
            src={`https://hamdanmovers.vercel.app/images/hamdan-mover-logo.png`}
          />
        </Section>

        <Section style={content}>
          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi Ahmad Hussain,
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                You have new order from hamdanmoversuae.com
              </Heading>
              <Heading
                style={{
                  fontSize: 25,
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Order Information
              </Heading>
              <Text style={paragraph}>
                <b>User Name </b>
                {name}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Phone Number </b>
                {phone}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Located At: </b>
                {address}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Service Want: </b>
                {services}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Description: </b>
                {message}
              </Text>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
          U.S.A. | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
);

import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
