export interface BorderOption {
    value: number;
    dimension?: string;
    type: string;
    color: string;
}

export interface BoxShadowOption {
    dimentions: DimentionOption[];
    inset: boolean;
    color: string;
}

export interface DimentionOption {
    value: number;
    dimension?: string;
}

export type SupportedStyleName =
    | 'width'
    | 'borderRadius'
    | 'fontSize'
    | 'margin'
    | 'padding'
    | 'color'
    | 'backgroundColor'
    | 'border'
    | 'boxShadow';
