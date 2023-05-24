import {useState} from 'react'
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChangeInput = (key, value) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const onSubmit = () => {
    // convert to mailto
    // example: mailto:myubash@gmail.com?subject=Inquiry%20about%20offering&body=Lorem%20ipsum%20sit%20amet%20dolor%0D%0A%0D%0A-%20Your%20name
    const {
      name, email, subject, message
    } = form
    const myMail = 'myubash@gmail.com'
    const body = 
    `From: ${email}
${message}
    
- ${name}`
    const uri = encodeURI(`mailto:${myMail}?subject=${subject}&body=${body}`)
    window.open(uri, '_blank');

  }

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
            onSubmit()
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
            onChange={handleChangeInput}
            value={form.name}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
            onChange={handleChangeInput}
            value={form.email}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
            onChange={handleChangeInput}
            value={form.subject}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
              onChange={(e) => handleChangeInput('message', e.target.value)}
              value={form.message}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
              onClick={onSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
