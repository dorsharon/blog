import {
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useId,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import type { JSX, PropsWithChildren } from 'react';

export default function Popover({
	isOpen,
	onOpenChange,
	content,
	children,
}: PropsWithChildren<{
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
	content: JSX.Element;
}>) {
	const {
		refs: { setReference, setFloating },
		floatingStyles,
		context,
	} = useFloating({
		open: isOpen,
		onOpenChange,
		// placement: 'bottom-start',
		middleware: [offset(10), flip({ fallbackAxisSideDirection: 'start' }), shift()],
		whileElementsMounted: autoUpdate,
	});

	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, role]);

	const headingId = useId();

	return (
		<>
			<div ref={setReference} {...getReferenceProps()}>
				{children}
			</div>

			{isOpen && (
				<div
					ref={setFloating}
					style={floatingStyles}
					aria-labelledby={headingId}
					{...getFloatingProps()}
				>
					{content}
				</div>
			)}
		</>
	);
}
