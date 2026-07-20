import React from 'react';

/** Terracotta-Zitatkarte: Simplaro-Symbol, «Zitat», Attribution in Peach. */
export function QuoteCard({ logoSrc, quote, attribution, style }) {
  return (
    <article style={{
      background: 'var(--grad-package)', border: '1.5px solid rgba(28, 22, 19, 0.5)',
      borderRadius: '24px', padding: '42px 36px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', ...style,
    }}>
      {logoSrc ? (
        <span style={{
          width: 68, height: 68, borderRadius: 20, background: 'var(--cream-50)',
          border: '1px solid rgba(255, 255, 255, 0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={logoSrc} alt="" style={{ height: 50, width: 'auto', display: 'block' }} />
        </span>
      ) : null}
      <blockquote style={{ margin: 0, maxWidth: '34ch', fontSize: 'clamp(22px, 2vw, 30px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.28, color: '#FFFFFF', textAlign: 'center' }}>
        «{quote}»
      </blockquote>
      {attribution ? (
        <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--peach-200)', textAlign: 'center' }}>{attribution}</p>
      ) : null}
    </article>
  );
}
