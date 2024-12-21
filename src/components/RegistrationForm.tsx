import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted successfully!");
    onOpenChange(false);
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
          <Input placeholder="Full Name" required />
          <Input type="number" placeholder="Age" required min="16" max="100" />
          <Input type="tel" placeholder="Phone Number" required />
          <Input type="email" placeholder="Email" required />
          <Input placeholder="College Name" required />
          
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Duration of Internship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Month</SelectItem>
              <SelectItem value="3">3 Months</SelectItem>
              <SelectItem value="6">6 Months</SelectItem>
            </SelectContent>
          </Select>

          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Domain of Internship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mern">MERN Stack Development</SelectItem>
              <SelectItem value="mean">MEAN Stack Development</SelectItem>
              <SelectItem value="node">Node.js Development</SelectItem>
              <SelectItem value="react">React.js Development</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" className="w-full hover-scale">Submit Registration</Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;