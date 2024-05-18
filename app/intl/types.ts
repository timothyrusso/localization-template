import type { getDictionary } from './get-dictionary';

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type DictionaryKeys = keyof typeof getDictionary;
