import { SvelteComponent } from "svelte";
import './button.css';
declare const __propDef: {
    props: {
        primary?: boolean | undefined;
        backgroundColor?: string | undefined;
        size?: "small" | "medium" | "large" | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
