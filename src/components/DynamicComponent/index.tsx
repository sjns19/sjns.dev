/**
 * This component is used for rendering components dynamically
 * that should not be rendered on the server side (code splitting).
 * 
 * Every component wrapped by this component gets rendered
 * on the client side.
 */

import type { ReactChildren } from '@global-types';
import dynamic from 'next/dynamic';

const DynamicComponent = ({ children }: ReactChildren) => <>{children}</>;
export default dynamic(() => Promise.resolve(DynamicComponent), {
	ssr: false
});