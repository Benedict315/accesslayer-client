export interface TooltipContent {
	lastUpdated?: string | null;
	quoteSource?: string | null;
}

export function formatRelativeTime(iso: string | null | undefined): string {
	if (iso == null) return 'Last updated: N/A';

	const date = new Date(iso);
	if (isNaN(date.getTime())) return 'Last updated: N/A';

	const diffMs = Date.now() - date.getTime();
	const diffSec = Math.floor(diffMs / 1000);

	// Future timestamps or < 60s → "just now"
	if (diffSec < 60) return 'just now';

	const diffMin = Math.floor(diffSec / 60);
	if (diffMin < 60) return `Updated ${diffMin} min ago`;

	const diffHr = Math.floor(diffMin / 60);
	if (diffHr < 24) return `Updated ${diffHr} hr ago`;

	const diffDay = Math.floor(diffHr / 24);
	return `Updated ${diffDay} day${diffDay === 1 ? '' : 's'} ago`;
}
