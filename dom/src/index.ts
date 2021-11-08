import { Plugin } from '@cycle/run';
import { Module } from 'snabbdom';
import { DomCommand, DomEvent, ScopeValue, Scope } from './types';
import { makeDomApi } from './api';
import { DomDriver } from './driver';

export { h, VNode } from 'snabbdom';
export { makeDomApi, DomApi } from './api';
export {
  DomCommand,
  DomEvent,
  AddEventListenerCommand,
  RemoveEventListenerCommand,
} from './types';

export * from './hyperscript-helpers';

export function makeDomPlugin(
  container: string | DocumentFragment | Element,
  modules?: Module[]
): Plugin<DomEvent, DomCommand> {
  return [new DomDriver(container, modules), makeDomApi];
}

export function total(value: ScopeValue): Scope {
  return { type: 'total', value };
}
export function sibling(value: ScopeValue): Scope {
  return { type: 'sibling', value };
}
