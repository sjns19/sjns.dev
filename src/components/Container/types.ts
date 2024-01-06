import type { ReactChildren } from '@global-types';

export default interface ContainerProps extends ReactChildren {
	element?: React.ElementType | string
}