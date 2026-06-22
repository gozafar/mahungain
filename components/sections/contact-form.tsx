"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";

export function ContactForm() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput label="Parent name" placeholder="Name" />
        <FormInput label="Phone number" placeholder="+91 ..." />
      </div>
      <FormInput label="Email address" placeholder="name@example.com" />
      <FormInput label="Message" placeholder="How can we help?" />
      <Button type="submit">Send enquiry</Button>
    </form>
  );
}
