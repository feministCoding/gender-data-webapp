// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Danny D. Alle Rechte vorbehalten. </p>
        </footer>
    );
};

export default Footer;