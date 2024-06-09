import {
	FloatingArrow,
	FloatingPortal,
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
	useTransitionStyles,
} from '@floating-ui/react';
import { type PropsWithChildren, useRef, useState } from 'react';
import styles from './Tooltip.module.css';

const ARROW_HEIGHT = 7;
const GAP = 2;

export default function Tooltip({
	label,
	children,
}: PropsWithChildren<{ label: string }>) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const arrowRef = useRef(null);

	const {
		refs: { setReference, setFloating },
		floatingStyles,
		context,
	} = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: 'bottom',
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(ARROW_HEIGHT + GAP),
			flip({ fallbackAxisSideDirection: 'start' }),
			shift(),
			arrow({ element: arrowRef }),
		],
	});

	const hover = useHover(context, { move: false });
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([
		hover,
		focus,
		dismiss,
		role,
	]);

	const { styles: transitionStyles } = useTransitionStyles(context);

	return (
		<>
			<div ref={setReference} {...getReferenceProps()}>
				{children}
			</div>

			<FloatingPortal>
				{isOpen && (
					<div
						className={styles.tooltip}
						ref={setFloating}
						style={{ ...transitionStyles, ...floatingStyles }}
						{...getFloatingProps()}
					>
						<FloatingArrow
							ref={arrowRef}
							context={context}
							fill={'#ffffff'}
							stroke={'#ffffff'}
						/>

						{label}
					</div>
				)}
			</FloatingPortal>
		</>
	);
}
