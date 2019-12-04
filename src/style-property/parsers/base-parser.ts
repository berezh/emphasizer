import { StylePropertyPatterns } from './style-property-patterns';
import { emphasizeNumber } from '../../number';
import { DimentionOption } from '../interfaces';

export type StylePropertyType = string | number | undefined;

export abstract class BaseParser {
    public abstract key: () => string;
    public abstract isMatch: (raw: StylePropertyType) => boolean;
    public abstract emphasize: (
        fromValue: StylePropertyType,
        toValue: StylePropertyType,
        fromRate: number,
        toRate: number,
        rate: number,
    ) => string;

    protected firstMatch(pattern: RegExp | string, raw: string): string | undefined {
        let result;
        const matches = raw.match(pattern);
        if (matches) {
            result = matches[0];
        }

        return result;
    }

    protected isInnerMatch(raw: StylePropertyType, pattern: RegExp): boolean {
        return this.toString(raw).match(pattern) !== null;
    }

    protected toString(raw: StylePropertyType): string {
        let text = '';
        if (typeof raw === 'string') {
            text = raw;
        } else if (typeof raw === 'number') {
            text = raw.toString();
        }
        return text;
    }

    protected trim(raw: string): string {
        return (raw || '').replace(/^\s*/gi, '').replace(/\s$/gi, '');
    }

    protected parseDimention(raw: StylePropertyType): DimentionOption {
        let value = 0;
        let dimension: string | undefined;
        const matches = this.toString(raw).match(StylePropertyPatterns.dimention);
        if (matches && matches.length) {
            value = parseFloat(this.firstMatch(StylePropertyPatterns.dimentionValue, matches[0]) || '0');
            dimension = this.firstMatch(StylePropertyPatterns.hasDimentionUnit, matches[0]);
        }

        return {
            value,
            dimension,
        };
    }

    protected parseDimentionSet(raw: StylePropertyType): DimentionOption[] {
        const result: DimentionOption[] = [];
        const matches = this.toString(raw).match(StylePropertyPatterns.dimention);
        if (matches) {
            for (const match of matches) {
                result.push(this.parseDimention(match));
            }
        }

        return result;
    }

    protected emphasizeDimentionSet(
        from: DimentionOption[],
        to: DimentionOption[],
        fromRate: number,
        toRate: number,
        rate: number,
    ): string {
        const options: DimentionOption[] = [];
        const max = Math.max(from.length, to.length);

        const fromOptions = this.fixedOptions(from, max);
        const toOptions = this.fixedOptions(to, max);

        const dimension = [...fromOptions.map(x => x.dimension)].find(x => x);

        for (let i = 0; i < fromOptions.length; i++) {
            options.push({
                value: emphasizeNumber(fromOptions[i].value, toOptions[i].value, fromRate, toRate, rate),
                dimension,
            });
        }

        return options.map(x => `${x.value}${x.dimension || ''}`).join(' ');
    }

    private fixedOptions(options: DimentionOption[], fixed: number): DimentionOption[] {
        const curent = options.length;
        const delta = fixed - curent;
        if (delta) {
            if (delta === 1) {
                if (curent === 3) {
                    return [options[0], options[0], options[0], options[0]];
                } else if (curent === 2) {
                    return [options[0], options[0], options[0]];
                } else if (curent === 1) {
                    return [options[0], options[0]];
                }
            } else if (delta === 2) {
                if (curent === 2) {
                    return [options[0], options[1], options[0], options[2]];
                } else if (curent === 1) {
                    return [options[0], options[1], options[0]];
                }
            } else if (delta === 3) {
                if (curent === 1) {
                    return [options[0], options[1], options[2], options[1]];
                }
            }
        }

        return options;
    }
}
