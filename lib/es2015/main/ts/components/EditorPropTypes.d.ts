import type { TinyMCE } from 'tinymce';
type EditorOptions = Parameters<TinyMCE['init']>[0];
export type CopyProps<T> = {
    [P in keyof T]: any;
};
export interface IPropTypes {
    apiKey: string;
    licenseKey: string;
    cloudChannel: string;
    id: string;
    init: EditorOptions & {
        selector?: undefined;
        target?: undefined;
    };
    initialValue: string;
    outputFormat: 'html' | 'text';
    inline: boolean;
    modelEvents: string[] | string;
    plugins: string[] | string;
    tagName: string;
    toolbar: string[] | string;
    modelValue: string;
    disabled: boolean;
    readonly: boolean;
    tinymceScriptSrc: string;
}
export declare const editorProps: CopyProps<IPropTypes>;
export {};