import React, { useCallback, useState, useRef } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const EMAIL_FIELD_NAME = 'email'
const PROFESSION_FIELD_NAME = 'profession'
const MESSAGE_FIELD_NAME = 'message'
const FLAG_FIELD_NAME = 'flag'

const INIT_FORM_DATA = {
  [EMAIL_FIELD_NAME]: '',
  [PROFESSION_FIELD_NAME]: '',
  [MESSAGE_FIELD_NAME]: '',
  [FLAG_FIELD_NAME]: ''
}

export default function FeedbackForm({ onSubmit }) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formData, setFormData] = useState(INIT_FORM_DATA)
  const [formResult, setFormResult] = useState('')
  const flagInputEl = useRef(null)

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

  const resetForm = () => {
    setFormData(() => INIT_FORM_DATA)
  }

  const onFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    formResult && setFormResult('')

    if (name in formData) {
      setFormData((values) => ({ ...values, [name]: value }))
    }
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()

    await handleReCaptchaVerify(async (token) => {
      const response = await onSubmit({
        ...formData,
        [FLAG_FIELD_NAME]: flagInputEl.current.value,
        token
      })
      const message = response?.message

      if (message && message.includes('Successfully')) {
        setFormResult(message)
      }

      resetForm()
    })
  }

  return (
    <div id="early-access-block" className="mt-24">
      <div className="w-full mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-medium text-primary-main">
          Request early access
        </h1>
      </div>
      <form
        className="w-full p-4 sm:p-8 border-4 rounded-xl border-secondary-light"
        onSubmit={onFormSubmit}
      >
        {formResult && (
          <h4 className="text-3xl text-center mb-2 text-primary-main">
            {formResult}
          </h4>
        )}
        <div className="flex items-center justify-center lg:space-x-5">
          <div className="w-full lg:w-1/2 lg:p-10">
            <div className="mb-6">
              <label
                className="block text-base sm:text-lg text-primary-main font-medium mb-1"
                htmlFor="inline-full-name"
              >
                Email <span className="text-red-500 font-normal">*</span>
              </label>
              <input
                className="bg-secondary-light text-base sm:text-lg appearance-none border-2 border-secondary-light rounded-xl w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
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
                className="block text-base sm:text-lg text-primary-main font-medium mb-1"
                htmlFor="inline-full-name"
              >
                Occupation <span className="text-red-500 font-normal">*</span>
              </label>
              <input
                className="bg-secondary-light text-base sm:text-lg appearance-none border-2 border-secondary-light rounded-xl w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
                id="inline-full-name"
                required
                name={PROFESSION_FIELD_NAME}
                type="text"
                maxLength="20"
                placeholder="designer / developer / investor"
                value={formData[PROFESSION_FIELD_NAME]}
                onChange={onFormChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-base sm:text-lg text-primary-main font-medium mb-1"
                htmlFor="inline-full-name"
              >
                Promo{' '}
                <span className="text-secondary-main font-normal text-sm">
                  (full flag)
                </span>
              </label>
              <input
                className="bg-secondary-light text-base sm:text-lg appearance-none border-2 border-secondary-light rounded-xl w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
                id="inline-full-name"
                name={FLAG_FIELD_NAME}
                type="text"
                maxLength="32"
                placeholder="04cd4558a08b4adda57fcf354146a352"
                value={formData[FLAG_FIELD_NAME]}
                onChange={onFormChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-base sm:text-lg text-primary-main font-medium mb-1"
                htmlFor="inline-full-name"
              >
                Message
              </label>
              <textarea
                className="bg-secondary-light text-base sm:text-lg appearance-none border-2 border-secondary-light rounded-xl w-full py-4 px-4 text-primary-main leading-tight focus:outline-none focus:bg-common-white focus:border-primary-light"
                id="inline-full-name"
                name={MESSAGE_FIELD_NAME}
                type="text"
                maxLength="256"
                placeholder="Write something to help us become better. Thank you!"
                value={formData[MESSAGE_FIELD_NAME]}
                onChange={onFormChange}
              />
            </div>
            <input
              ref={flagInputEl}
              hidden
              type="text"
              value={formData[FLAG_FIELD_NAME]}
              onChange={onFormChange}
            />
            <div className="">
              <button
                className="w-full inline-flex items-center justify-center p-5 text-base font-medium rounded-full tracking-wide text-common-white transition duration-200 bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
                type="submit"
              >
                Request
              </button>
            </div>
          </div>
          <div
            className={`w-1/2 h-header-img hidden lg:block ${
              !formResult ? 'bg-form-def' : 'bg-form-success'
            } bg-contain bg-center bg-no-repeat`}
          />
        </div>
      </form>
    </div>
  )
}
