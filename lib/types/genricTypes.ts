import { ReactNode } from 'react';

interface FieldError {
	field: string;
	msg: string | ReactNode;
}

export type { FieldError };
