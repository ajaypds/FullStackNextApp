import {Html, Head, Font, Preview, Heading, Row, Section, Text, Button} from '@react-email/components'

interface VerificationEmailProps{
    username: string;
    otp: string;
}

export default function VerificationEmail({username, otp} : VerificationEmailProps){
    return(
        <Html lang='en' dir='ltr'>
            <Head>
                <title>Verification Code</title>
                <Font
                fontFamily='Roboto'
                fallbackFontFamily='Verdana'
                webFont={{
                    url: 'http://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                    format: 'woff2'
                }}
                fontWeight={200}
                fontStyle='normal'
                />
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as='h2'>Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thanks for registering. Please use the following verification code to complete your registration
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you do not request this code, please ignore this email
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}