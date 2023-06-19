import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"
import NewsLetter from "./Newsletter"
// import.meta.env;

interface ImportMeta {
    readonly env: ImportMetaEnv
}
export default function MailChimpForm() {
    const i = import.meta.env;
    const postUrl = `${i.VITE_REACT_APP_MAILCHIMP_URL}?u=${i.VITE_REACT_APP_MAILCHIMP_U}&id=${i.VITE_REACT_APP_MAILCHIMP_ID}`


    // const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}?id=${process.env.REACT_APP_MAILCHIMP_ID}`

    return (
        <>
            <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => (
                <NewsLetter
                    status={status}
                    message={message}
                    onValidated={(formData: EmailFormFields) => subscribe(formData)}
                />
            )} />
        </>
    )
}
