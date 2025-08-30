import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Football-themed colors
        pitch: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        trophy: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        stadium: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Custom football-themed animations
        "ball-bounce": {
          "0%, 20%, 53%, 80%, 100%": {
            transform: "translate3d(0,0,0)",
          },
          "40%, 43%": {
            transform: "translate3d(0, -30px, 0)",
          },
          "70%": {
            transform: "translate3d(0, -15px, 0)",
          },
          "90%": {
            transform: "translate3d(0, -4px, 0)",
          },
        },
        "goal-celebration": {
          "0%": {
            transform: "scale(1) rotate(0deg)",
          },
          "25%": {
            transform: "scale(1.1) rotate(-5deg)",
          },
          "50%": {
            transform: "scale(1.2) rotate(5deg)",
          },
          "75%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
          },
        },
        "stadium-lights": {
          "0%, 100%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "1",
          },
        },
        "trophy-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))",
          },
        },
        "field-wave": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ball-bounce": "ball-bounce 1s ease-in-out infinite",
        "goal-celebration": "goal-celebration 0.6s ease-in-out",
        "stadium-lights": "stadium-lights 2s ease-in-out infinite",
        "trophy-glow": "trophy-glow 1.5s ease-in-out infinite",
        "field-wave": "field-wave 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pitch-pattern': 'linear-gradient(90deg, #22c55e 50%, #16a34a 50%)',
        'stadium-lights': 'radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 75% 25%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 25% 75%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 75% 75%, #fbbf24 0%, transparent 50%)',
      },
      boxShadow: {
        'stadium': '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'trophy': '0 0 0 1px rgba(251, 191, 36, 0.3), 0 20px 25px -5px rgba(251, 191, 36, 0.2), 0 10px 10px -5px rgba(251, 191, 36, 0.1)',
        'ball': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
