import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const PatientFormDialog = ({ open, setOpen, mode = "add", patient, onSubmit, trigger }) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        photo: "",
    });

    useEffect(() => {
        if (mode === "edit" && patient) {
            setFormData({
                firstName:patient.firstName|| "",
                lastName:patient.lastName || "",
                email: patient.email || "",
                phone: patient.phone || "",
                dob: patient.dob || "",
                gender: patient.gender || "",
                address: patient.address || "",
                photo: patient.photo || "",
            });
        }
    }, [mode, patient]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            if (mode === "add") {
                console.log(formData);
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/patient/add`, formData);
                toast.success("Patient added successfully");
            } else {
                console.log(formData);
                const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/patient/${patient.id}`, formData);
                toast.success("Patient updated successfully");
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
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{mode === "edit" ? "Edit Patient" : "Add New Patient"}</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 py-2">
                    <Input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <Input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <Input placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    <Input placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                    <Input placeholder="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                    <Input placeholder="Gender" name="gender" value={formData.gender} onChange={handleChange} />
                    <Input placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                    <Input placeholder="Photo URL (optional)" name="photo" value={formData.photo} onChange={handleChange} />
                </form>
                <DialogFooter>
                    <Button onClick={handleSubmit}>
                        {mode === "edit" ? "Update" : "Add"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default PatientFormDialog;
