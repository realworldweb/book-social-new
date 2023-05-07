import { SVGProps } from 'react';

export function SVGBooks(props: SVGProps<SVGSVGElement>) {
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

export function SVGLogin(props: SVGProps<SVGSVGElement>) {
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

export function SVGEmail(props: SVGProps<SVGSVGElement>) {
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
				d='M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z'
			/>
		</svg>
	);
}

export function SVGFacebook(props: SVGProps<SVGSVGElement>) {
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
				d='M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z'
			/>
		</svg>
	);
}

export function SVGGoogle(props: SVGProps<SVGSVGElement>) {
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
				d='M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.998 5.888 5.998c2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26Z'
			/>
		</svg>
	);
}

export function SVGSignIn(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1rem'}
			height={height ?? '1rem'}
			viewBox='0 0 16 16'
			{...rest}
		>
			<g fill={fill ?? 'currentColor'}>
				<path d='M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z' />
				<path d='M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z' />
			</g>
		</svg>
	);
}

export function SVGSignOut(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1rem'}
			height={height ?? '1rem'}
			viewBox='0 0 36 36'
			{...rest}
		>
			<path
				fill={fill ?? 'currentColor'}
				d='M7 6h16v9.8h2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2H7Z'
				className='clr-i-outline clr-i-outline-path-1'
			/>
			<path
				fill={fill ?? 'currentColor'}
				d='M28.16 17.28a1 1 0 0 0-1.41 1.41L30.13 22h-14.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14.5l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z'
				className='clr-i-outline clr-i-outline-path-2'
			/>
			<path fill='none' d='M0 0h36v36H0z' />
		</svg>
	);
}
