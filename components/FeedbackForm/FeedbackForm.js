import React, { useCallback, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const EMAIL_FIELD_NAME = 'email'
const PROFESSION_FIELD_NAME = 'profession'
const SIMILAR_SITES_FIELD_NAME = 'similarSites'

const INIT_FORM_DATA = {
  [EMAIL_FIELD_NAME]: '',
  [PROFESSION_FIELD_NAME]: '',
  [SIMILAR_SITES_FIELD_NAME]: ''
}

export default function FeedbackForm({ onSubmit }) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formData, setFormData] = useState(INIT_FORM_DATA)

  const handleReCaptchaVerify = useCallback(
    async (event) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available')
        return
      }

      const token = await executeRecaptcha('yourAction')

      event(token)
    },
    [executeRecaptcha, formData]
  )

  const onFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name in formData) {
      setFormData((values) => ({ ...values, [name]: value }))
    }
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    await handleReCaptchaVerify((token) => {
      onSubmit && onSubmit({ ...formData, token })

      setFormData(() => INIT_FORM_DATA)
    })
  }

  return (
    <div id="early-access-block" className="mt-16">
      <div className="w-full mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-medium text-primary-main">
          Early access
        </h1>
      </div>
      <form
        className="w-full p-4 sm:p-8 border-4 rounded-lg border-secondary-light"
        onSubmit={onFormSubmit}
      >
        <div className="max-w-md sm:mx-auto">
          <div className="mb-6">
            <label
              className="block text-primary-main font-medium mb-1"
              htmlFor="inline-full-name"
            >
              Email <span className="text-red-500 font-normal">*</span>
            </label>
            <input
              className="bg-secondary-light appearance-none border-2 border-secondary-light rounded w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
              id="inline-full-name"
              required
              name={EMAIL_FIELD_NAME}
              type="email"
              placeholder="idea-research@gmail.com"
              value={formData[EMAIL_FIELD_NAME]}
              onChange={onFormChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-primary-main font-medium mb-1"
              htmlFor="inline-full-name"
            >
              You are <span className="text-red-500 font-normal">*</span>
            </label>
            <input
              className="bg-secondary-light appearance-none border-2 border-secondary-light rounded w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
              id="inline-full-name"
              required
              name={PROFESSION_FIELD_NAME}
              type="text"
              maxLength="20"
              placeholder="designer / developer / entrepreneur"
              value={formData[PROFESSION_FIELD_NAME]}
              onChange={onFormChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-primary-main font-medium mb-1"
              htmlFor="inline-full-name"
            >
              I know similar sites
            </label>
            <input
              className="bg-secondary-light appearance-none border-2 border-secondary-light rounded w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
              id="inline-full-name"
              name={SIMILAR_SITES_FIELD_NAME}
              type="text"
              maxLength="20"
              placeholder="producthunt.com, techcrunch.com, ycombinator.com"
              value={formData[SIMILAR_SITES_FIELD_NAME]}
              onChange={onFormChange}
            />
          </div>
          <div className="">
            <button
              className="w-full inline-flex items-center justify-center h-12 p-8 font-medium text-sm tracking-wide text-common-white transition duration-200 rounded-lg bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
              type="submit"
            >
              Request
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
