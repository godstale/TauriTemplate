import { AppMark } from '@/components/brand/AppMark';
import { Card, Well } from '@/components/ui/card';
import { APP_NAME } from '@/lib/brand';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import iconMaster from '../../../design/brand/app-icon.png';
import iconDark from '../../../design/brand/app-icon-dark.png';
import iconLight from '../../../design/brand/app-icon-light.png';
import banner from '../../../design/brand/app-banner.svg';
import pattern from '../../../design/brand/app-pattern.svg';
import { PageHeader, Section } from './DesignSection';

const SIZES = [256, 128, 64, 48, 32, 16];

export function BrandPage() {
  const { t } = useLanguage();
  const variants = [
    { src: iconMaster, labelKey: 'design.brand.variantMaster' },
    { src: iconDark, labelKey: 'design.brand.variantDark' },
    { src: iconLight, labelKey: 'design.brand.variantLight' },
  ];

  return (
    <>
      <PageHeader
        badge={t('design.nav.brand')}
        title={t('design.brand.title')}
        lead={t('design.brand.lead')}
      />

      <Section label={t('design.brand.sizes')}>
        <Well className="flex flex-wrap items-end gap-8">
          {SIZES.map((size) => (
            <figure key={size} className="flex flex-col items-center gap-2">
              <img src={iconMaster} width={size} height={size} alt="" />
              <figcaption className="font-mono text-xs text-muted-foreground">
                {size}px
              </figcaption>
            </figure>
          ))}
        </Well>
        <p className="text-xs text-muted-foreground">
          {t('design.brand.sizesHint')}
        </p>
      </Section>

      <Section label={t('design.brand.variants')}>
        <div className="grid grid-cols-3 gap-4">
          {variants.map(({ src, labelKey }) => (
            <Card key={labelKey} className="flex flex-col items-center gap-4">
              <img src={src} width={140} height={140} alt="" />
              <p className="text-xs text-muted-foreground">{t(labelKey)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section label={t('design.brand.mark')}>
        <Card className="flex flex-wrap items-center gap-10">
          <AppMark className="h-24 w-24" />
          <AppMark className="h-12 w-12" />
          <AppMark compact className="h-6 w-6" />
          <span className="flex items-center gap-2 text-foreground">
            <AppMark className="h-7 w-7" />
            <strong className="text-lg tracking-tight">{APP_NAME}</strong>
          </span>
        </Card>
      </Section>

      <Section label={t('design.brand.banner')}>
        <img src={banner} alt="" className="w-full rounded-card" />
        <div className="grid grid-cols-2 gap-4">
          <img src={pattern} alt="" className="w-full rounded-card" />
          <Card className="flex items-center">
            <p className="text-sm text-muted-foreground">
              {t('design.brand.patternHint')}
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default BrandPage;
