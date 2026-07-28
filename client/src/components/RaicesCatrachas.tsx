'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { designTokens as tokens } from '@/theme/designTokens';

const translations = {
  es: {
    eyebrow: 'Hecho con orgullo en honduras 🇭🇳',
    title: 'Nuestra Tierra, Nuestra Misión',
    description: 'Creemos firmemente en el poder transformador de la educación enraizada en nuestra tierra. Honduras no es solo nuestro hogar geográfico, es el corazón de nuestra misión. Cada estudiante que educamos, cada familia que acompañamos, cada comunidad que tocamos, lleva en sí la esperanza de una nación mejor. Nuestro compromiso es inquebrantable: sembrar semillas de excelencia académica, valores cristianos y liderazgo comunitario que florecerán en las próximas generaciones de catrachos comprometidos con el cambio.',
  },
  en: {
    eyebrow: 'Made with pride in honduras 🇭🇳',
    title: 'Our Land, Our Mission',
    description: 'We firmly believe in the transformative power of education rooted in our land. Honduras is not just our geographic home, it is the heart of our mission. Every student we educate, every family we accompany, every community we touch, carries within it the hope of a better nation. Our commitment is unwavering: to plant seeds of academic excellence, Christian values, and community leadership that will flourish in the next generations of Hondurans committed to change.',
  },
};

interface CatrachosImage {
  src: string;
  gridColumn?: { md: string };
  gridRow?: { md: string };
}

const catrachosImages: CatrachosImage[] = [
  {
    src: '/assets/catrachos/catracho-1.jpg',
    gridColumn: { md: 'span 2' },
    gridRow: { md: 'span 2' },
  },
  {
    src: '/assets/catrachos/catracho-2.jpg',
  },
  {
    src: '/assets/catrachos/catracho-3.jpg',
  },
  {
    src: '/assets/catrachos/catracho-4.jpg',
  },
  {
    src: '/assets/catrachos/catracho-5.jpg',
    gridColumn: { md: 'span 2' },
    gridRow: { md: 'span 2' },
  },
  {
    src: '/assets/catrachos/catracho-6.jpg',
  },
  {
    src: '/assets/catrachos/catracho-7.jpg',
  },
  {
    src: '/assets/catrachos/catracho-8.jpg',
  },
];

export function RaicesCatrachas() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.es;

  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        px: { xs: 4, md: 6 },
        backgroundColor: tokens.color.ivory,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={12} alignItems="center">
          {/* Left Column - Manifesto */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Eyebrow */}
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: tokens.color.hopeGold,
                }}
              >
                {t.eyebrow}
              </Typography>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  color: tokens.color.slate900,
                  letterSpacing: '-0.02em',
                }}
              >
                {t.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.8,
                  color: tokens.color.slate600,
                  fontWeight: 400,
                }}
              >
                {t.description}
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - 8 Photo Grid with Asymmetric Layout */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 3,
              }}
            >
              {catrachosImages.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    aspectRatio: '1 / 1',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    ...(image.gridColumn && { gridColumn: image.gridColumn }),
                    ...(image.gridRow && { gridRow: image.gridRow }),
                    '&:hover': {
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                      transform: 'translateY(-4px)',
                    },
                    '& img': {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover img': {
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Raíces Catrachas ${index + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />

                  {/* Overlay Gradient */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 300ms ease-out',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
