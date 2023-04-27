import { SVGProps } from 'react';

export function Books(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1rem'}
			height={height ?? '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ?? 'currentColor'}
				d='m22.47 18.82l-1-3.86l-3.15-11.59a1 1 0 0 0-1.22-.71l-3.87 1a1 1 0 0 0-.73-.33h-10a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8l2.2 8.22a1 1 0 0 0 1 .74a1.15 1.15 0 0 0 .26 0L21.79 20a1 1 0 0 0 .61-.47a1.05 1.05 0 0 0 .07-.71Zm-16 .55h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm5 12h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm2.25-1.74l2.9-.78l.52 1.93l-2.9.78Zm2.59 9.66l-1.55-5.8l2.9-.78l1.55 5.8Zm1 3.86l-.52-1.93l2.9-.78l.52 1.93Z'
			/>
		</svg>
	);
}

export function Login(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1rem'}
			height={height ?? '1rem'}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ?? 'currentColor'}
				d='M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-7Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z'
			/>
		</svg>
	);
}
