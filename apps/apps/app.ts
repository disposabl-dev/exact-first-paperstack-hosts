import type { Answer, Sources } from './app.contract.d.ts';
const origin = import.meta.env.CONVEX_ORIGIN;
export const grants = `net.websocket ${origin}`;
const sources: Sources = {
  loadDraft: (_, store) => ({body: store.get('paperstack.draft') ?? '# Field notes\n\nWhat did you notice today?'}),
  saveDraft: ([body], store) => { store.set('paperstack.draft', body); return {body}; },
};
export const answer: Answer = (name, args, store, storage, native) => sources[name](args, store, storage, native);
