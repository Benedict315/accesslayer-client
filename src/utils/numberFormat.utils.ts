export type NumberFormatStyle = 'full' | 'compact';

export interface FormatNumberOptions {
	style?: NumberFormatStyle;
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
}

function getNumberFormatter({
	style = 'full',
	maximumFractionDigits,
	minimumFractionDigits,
}: FormatNumberOptions) {
	const resolvedMaximumFractionDigits =
		maximumFractionDigits ?? (style === 'compact' ? 1 : 2);
	const resolvedMinimumFractionDigits = minimumFractionDigits ?? 0;

	return new Intl.NumberFormat(undefined, {
		notation: style === 'compact' ? 'compact' : 'standard',
		compactDisplay: 'short',
		maximumFractionDigits: resolvedMaximumFractionDigits,
		minimumFractionDigits: resolvedMinimumFractionDigits,
	});
}

export function formatNumber(
	value: number | null | undefined,
	options: FormatNumberOptions = {}
): string {
	if (value == null) return '—';
	if (!Number.isFinite(value)) return '—';
	return getNumberFormatter(options).format(value);
}

export function formatCompactNumber(
	value: number | null | undefined,
	options: Omit<FormatNumberOptions, 'style'> = {}
): string {
	return formatNumber(value, { ...options, style: 'compact' });
}

