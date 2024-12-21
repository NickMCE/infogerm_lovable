import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phoneNumber: "",
    email: "",
    collegeName: "",
    internshipDuration: "",
    internshipDomain: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hook.eu2.make.com/8q6808smpg155q2ic4p2bndjvwddb3bs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Registration submitted successfully!");
        onOpenChange(false);
      } else {
        toast.error("Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Register for Internship</DialogTitle>
        </DialogHeader>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4 mt-4"
        >
          <Input
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            name="age"
            type="number"
            placeholder="Age"
            required
            min="16"
            max="100"
            value={formData.age}
            onChange={handleChange}
          />
          <Input
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="collegeName"
            placeholder="College Name"
            required
            value={formData.collegeName}
            onChange={handleChange}
          />

          <Select
            required
            onValueChange={(value) =>
              handleSelectChange("internshipDuration", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Duration of Internship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Month">1 Month</SelectItem>
              <SelectItem value="3 Months">3 Months</SelectItem>
              <SelectItem value="6 Months">6 Months</SelectItem>
            </SelectContent>
          </Select>

          <Select
            required
            onValueChange={(value) =>
              handleSelectChange("internshipDomain", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Domain of Internship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mern">MERN Stack Development</SelectItem>
              <SelectItem value="mean">MEAN Stack Development</SelectItem>
              <SelectItem value="node">Node.js Development</SelectItem>
              <SelectItem value="react">React.js Development</SelectItem>
              <SelectItem value="react-native">React Native Development</SelectItem>
              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" className="w-full hover-scale">
            Submit Registration
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
