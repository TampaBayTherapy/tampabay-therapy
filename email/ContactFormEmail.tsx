import { TContactFormSchema } from "@/lib/types";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: TContactFormSchema) {
  return (
    <Html>
      <Head />
      <Preview>
        New message from: {firstName} {lastName}
      </Preview>
      <Tailwind>
        <Body className="bg-primary-50 text-black font-sans">
          <Container className="mx-auto my-6 max-w-3xl rounded-md bg-white p-6 shadow-lg">
         
            <Section>
              <Heading className="text-slate-800 text-xl font-semibold text-center">
                New message from: {firstName} {lastName}
              </Heading>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-slate-700 leading-relaxed">
                <strong>Message:</strong>
                <br />
                {message}
              </Text>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-slate-700">
                <strong>Sender Email:</strong> {email}
              </Text>
              <Text className="text-slate-700">
                <strong>Contact Number:</strong> {phone}
              </Text>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-center text-slate-500 text-sm">
                This message has been sent from your contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
