import React, { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const DoctorFormDialog = ({ open, setOpen,mode = "add", doctor = {}, onSubmit, trigger }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        specialty: "",
        photo: ""
    });

    useEffect(() => {
        if (mode === "edit" && doctor) {
            setFormData({
                firstName: doctor.firstName || "",
                lastName: doctor.lastName || "",
                email: doctor.email || "",
                phoneNumber: doctor.phoneNumber || "",
                specialty: doctor.specialty || "",
                photo: doctor.photo || ""
            });
        }
    }, [mode, doctor]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            if (mode === "add") {
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/doctor`, formData);
                toast.success("Doctor added successfully");
            } else {
                const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/doctor/${doctor.id}`, formData);
                toast.success("Doctor updated successfully");
            }
            if (onSubmit) onSubmit(); // Refresh list in parent
            setOpen(false);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
            setOpen(false);
        }
    };

    return (
        <Dialog open={open}  onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{mode === "edit" ? "Edit Doctor" : "Add New Doctor"}</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 py-2">
                    <Input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <Input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <Input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    <Input placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    <Input placeholder="Specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
                    <Input placeholder="Photo URL (optional)" name="photo" value={formData.photo} onChange={handleChange} />
                </form>
                <DialogFooter>
                    <Button onClick={handleSubmit}>{mode === "edit" ? "Update" : "Add"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DoctorFormDialog;
