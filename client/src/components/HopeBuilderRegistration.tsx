import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import verticalImage from "@/assets/photos/semilla.jpg";

const content = {
  es: {
    title: "Únete al Equipo de Donantes de Esperanza",
    description:
      "Completa el formulario a continuación para comenzar tu viaje como Donante de Esperanza y marcar la diferencia en nuestras comunidades.",
    formFields: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      phone: "Teléfono",
      streetAddress: "Dirección",
      addressLine2: "Dirección (línea 2)",
      city: "Ciudad",
      state: "Estado / Provincia / Región",
      zipCode: "Código Postal",
      country: "País",
      donationAmount: "Monto de Donación Mensual",
      submit: "Únete Ahora",
    },
    donationOptions: [
      { value: "30", label: "$30 / mes" },
      { value: "60", label: "$60 / mes" },
      { value: "125", label: "$125 / mes" },
      { value: "250", label: "$250 / mes" },
      { value: "500", label: "$500 / mes" },
      { value: "other", label: "Otro monto" },
    ],
  },
  en: {
    title: "Join the Team of Donors of Hope",
    description:
      "Complete the form below to start your journey as a Donant of Hope and make a difference in our communities.",
    formFields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      streetAddress: "Street Address",
      addressLine2: "Address Line 2",
      city: "City",
      state: "State / Province / Region",
      zipCode: "ZIP / Postal Code",
      country: "Country",
      donationAmount: "Monthly Donation Amount",
      submit: "Join Now",
    },
    donationOptions: [
      { value: "30", label: "$30 / month" },
      { value: "60", label: "$60 / month" },
      { value: "125", label: "$125 / month" },
      { value: "250", label: "$250 / month" },
      { value: "500", label: "$500 / month" },
      { value: "other", label: "Other amount" },
    ],
  },
};

export function HopeBuilderRegistration() {
  const { language } = useLanguage();
  const copy = content[language];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    donationAmount: "30",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      donationAmount: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              letterSpacing: "-0.065em",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {copy.title}
          </Typography>

          {/* Gold Accent Line */}
          <Box
            sx={{
              width: "4rem",
              height: "0.35rem",
              backgroundColor: tokens.color.hopeGold,
              borderRadius: "999px",
              mx: "auto",
              mb: 4,
            }}
          />

          {/* Description */}
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "1rem", md: "1.05rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.8,
              letterSpacing: "-0.01em",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {copy.description}
          </Typography>
        </Box>

        {/* Content Grid - Form and Image */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: "flex-start",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          {/* Image Column */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: tokens.radius.lg,
                backgroundColor: tokens.color.warmWhite,
                boxShadow: tokens.shadow.soft,
                height: "100%",
              }}
            >
              {/* Name Fields */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.firstName}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.lastName}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Email and Phone */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="email"
                    label={copy.formFields.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="tel"
                    label={copy.formFields.phone}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Address */}
              <TextField
                fullWidth
                label={copy.formFields.streetAddress}
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    fontFamily: tokens.font.body,
                    "& fieldset": {
                      borderColor: tokens.color.warmSand,
                    },
                    "&:hover fieldset": {
                      borderColor: tokens.color.hopeGold,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: tokens.color.hopeGold,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: tokens.font.body,
                    color: tokens.color.graphiteSoft,
                    "&.Mui-focused": {
                      color: tokens.color.hopeGold,
                    },
                  },
                }}
              />

              {/* Address Line 2, City, State, Zip */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.addressLine2}
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.city}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* State and Zip */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.state}
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={copy.formFields.zipCode}
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontFamily: tokens.font.body,
                        "& fieldset": {
                          borderColor: tokens.color.warmSand,
                        },
                        "&:hover fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: tokens.color.hopeGold,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: tokens.font.body,
                        color: tokens.color.graphiteSoft,
                        "&.Mui-focused": {
                          color: tokens.color.hopeGold,
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Donation Amount */}
              <FormControl sx={{ mb: 4, width: "100%" }}>
                <FormLabel
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: tokens.color.graphite,
                    mb: 2,
                    "&.Mui-focused": {
                      color: tokens.color.hopeGold,
                    },
                  }}
                >
                  {copy.formFields.donationAmount}
                </FormLabel>
                <RadioGroup
                  value={formData.donationAmount}
                  onChange={handleDonationChange}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  {copy.donationOptions.map(option => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={
                        <Radio
                          sx={{
                            color: tokens.color.warmSand,
                            "&.Mui-checked": {
                              color: tokens.color.hopeGold,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontFamily: tokens.font.body,
                            fontSize: "0.95rem",
                            color: tokens.color.graphite,
                          }}
                        >
                          {option.label}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: tokens.color.hopeGold,
                  color: tokens.color.graphite,
                  fontFamily: tokens.font.display,
                  fontSize: "1rem",
                  fontWeight: 820,
                  letterSpacing: "-0.035em",
                  py: 1.8,
                  borderRadius: tokens.radius.md,
                  textTransform: "none",
                  transition: "all 300ms ease-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  "&:hover": {
                    backgroundColor: tokens.color.hopeGold,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 20px rgba(242, 185, 0, 0.3)`,
                  },
                }}
              >
                {copy.formFields.submit}
                <ArrowRight size={20} strokeWidth={2} />
              </Button>
            </Box>
          </Grid>

          {/* Form Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: "350px",
                borderRadius: tokens.radius.lg,
                overflow: "hidden",
                boxShadow: tokens.shadow.soft,
              }}
            >
              <Box
                component="img"
                src={verticalImage}
                alt="Hope Builders Community"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(242, 185, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
