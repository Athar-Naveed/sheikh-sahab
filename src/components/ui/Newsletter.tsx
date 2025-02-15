"use client";

import { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail } from "lucide-react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be less than 30 characters")
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function NewsletterForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleSubmit = async (
    values: { firstName: string; email: string },
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      // Replace with your API call
      console.log("Form submitted:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      setSubmitStatus({
        success: true,
        message: "Thank you for subscribing!",
      });
      resetForm();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-[400px] md:min-h-[800px] bg-gray-900 flex flex-col items-center justify-center px-4 py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInLeftVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Icon Container */}
      <motion.div
        className="mb-8 relative"
        variants={fadeInLeftVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-16 h-16 rounded-full bg-transparent border border-slate-500 flex items-center justify-center">
          <Mail className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-white text-3xl md:text-4xl font-medium text-center max-w-2xl mb-12"
        variants={fadeInLeftVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Receive the latest updates about our offers in your inbox.
      </motion.h2>

      {/* Form */}
      <Formik
        initialValues={{ firstName: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="w-full max-w-2xl space-y-4">
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              variants={fadeInLeftVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex-1">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className={`w-full bg-transparent border ${
                    touched.firstName && errors.firstName
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a5af5] transition-colors`}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex-1">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={`w-full bg-transparent border ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a5af5] transition-colors`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 mt-6"
              variants={fadeInLeftVariants}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`text-sm ${
                    submitStatus.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </motion.div>
          </Form>
        )}
      </Formik>

      {/* Footer Text */}
      <motion.p
        className="text-gray-300 text-center text-sm mt-6"
        variants={fadeInLeftVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Get the latest content in your inbox every week. We don&apos;t spam.
      </motion.p>
    </motion.div>
  );
}
