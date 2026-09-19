import React from 'react';

interface GelvisolLogoProps {
  variant?: 'horizontal' | 'vertical' | 'emblem';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export const GelvisolLogo: React.FC<GelvisolLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  inverted = false,
}) => {
  const orange = '#D84315';
  const blue = '#0288D1';
  const lightTextColor = '#FFFFFF';
  const lightSubColor = '#E0F2FE';

  // Logo image rendering from the user-provided logo.png
  const Emblem = ({ height = 48 }: { height?: number }) => (
    <img
      src="/logo.png"
      alt="Símbolo Oficial Gelvisol"
      style={{ height: `${height}px` }}
      className="w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
    />
  );

  if (variant === 'emblem') {
    const h = size === 'sm' ? 36 : size === 'md' ? 48 : size === 'lg' ? 64 : 88;
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem height={h} />
      </div>
    );
  }

  if (variant === 'vertical') {
    const h = size === 'sm' ? 44 : size === 'md' ? 60 : size === 'lg' ? 80 : 100;
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <Emblem height={h} />
        <div className="mt-2">
          <span
            style={{ color: inverted ? lightTextColor : orange }}
            className="block text-2xl md:text-3xl font-extrabold tracking-[0.18em] uppercase font-display"
          >
            GELVISOL
          </span>
          <span
            style={{ color: inverted ? lightSubColor : blue }}
            className="block text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase mt-0.5"
          >
            CENTRO MÉDICO ESPECIALIZADO
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal' variant for Header / Navbar
  const emblemH = size === 'sm' ? 38 : size === 'md' ? 48 : size === 'lg' ? 58 : 70;
  const titleSize = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl md:text-2xl' : 'text-3xl';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-[10px] md:text-[11px]' : 'text-xs';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <Emblem height={emblemH} />
      <div className="flex flex-col leading-tight">
        <span
          style={{ color: inverted ? lightTextColor : orange }}
          className={`${titleSize} font-extrabold tracking-[0.14em] uppercase font-display`}
        >
          GELVISOL
        </span>
        <span
          style={{ color: inverted ? lightSubColor : blue }}
          className={`${subSize} font-bold tracking-[0.22em] uppercase mt-0.5 whitespace-nowrap`}
        >
          CENTRO MÉDICO ESPECIALIZADO
        </span>
      </div>
    </div>
  );
};
