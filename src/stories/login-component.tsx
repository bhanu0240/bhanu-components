import React, { useRef, useState } from "react";
import { Button, ButtonProps } from "./Button";
import "./login-component.css";

export interface textFieldProps {
  type: string;
  placeholder: string;
  id: string;
  className?: string;
}

export interface LoginComponentProps {
  textfieldOneProps: textFieldProps;
  textfieldTwoProps: textFieldProps;
  btnProps: ButtonProps;
}

interface FieldState {
  value: string;
  error: string;
  showError: boolean;
}

interface FormFields {
  email: FieldState;
  password: FieldState;
}

export const LoginComponent = ({
  btnProps,
  textfieldOneProps,
  textfieldTwoProps,
}: LoginComponentProps) => {
  const [formData, setFormData] = useState<FormFields>({
    email: { value: "", error: "", showError: false },
    password: { value: "", error: "", showError: false },
  });
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name as keyof FormFields],
        value,
        showError: false,
      },
    }));
  };

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email format";
  };

  const validatePassword = (password: string): string => {
    return password.length >= 8
      ? ""
      : "Password must be at least 8 characters long";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    let error = "";

    if (name === "email") error = validateEmail(value);
    if (name === "password") error = validatePassword(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: { value, error, showError: !!error },
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    const emailError = validateEmail(formData.email.value);
    const passwordError = validatePassword(formData.password.value);

    setFormData({
      email: { ...formData.email, error: emailError, showError: !!emailError },
      password: {
        ...formData.password,
        error: passwordError,
        showError: !!passwordError,
      },
    });

    if (!emailError && !passwordError) {
      console.log("Form submitted successfully", {
        email: formData.email.value,
        password: formData.password.value,
      });
      btnProps.onClick?.(e);
    }
  };

  const handleMouseHover = (e: React.MouseEvent<HTMLElement>): void => {
    const emailError = validateEmail(formData.email.value);
    const passwordError = validatePassword(formData.password.value);

    if (emailError || passwordError) {
      setFormData({
        email: {
          ...formData.email,
          error: emailError,
          showError: !!emailError,
        },
        password: {
          ...formData.password,
          error: passwordError,
          showError: !!passwordError,
        },
      });

      if (direction === "right") {
        setDirection("left");
      } else {
        setDirection("right");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="textfield email-container">
        <input
          value={formData.email.value}
          name="email"
          className={formData.email.showError ? "email invalid" : "email"}
          type={textfieldOneProps.type}
          id={textfieldOneProps.id}
          placeholder={textfieldOneProps.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div style={{ height: "1.2em", color: "red" }}>
          {formData.email.showError && formData.email.error}
        </div>
      </div>
      <div className="textfield password-container">
        <input
          value={formData.password.value}
          name="password"
          className={formData.password.showError ? "email invalid" : "password"}
          type={textfieldTwoProps.type}
          id={textfieldTwoProps.id}
          placeholder={textfieldTwoProps.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div style={{ height: "1.2em", color: "red" }}>
          {formData.password.showError && formData.password.error}
        </div>
      </div>
      <div className="btn-container">
        <Button
          {...btnProps}
          onClick={handleSubmit}
          onMouseEnter={handleMouseHover}
          className={
            formData.email.showError || formData.password.showError
              ? direction
              : ""
          }
        />
      </div>
    </div>
  );
};
