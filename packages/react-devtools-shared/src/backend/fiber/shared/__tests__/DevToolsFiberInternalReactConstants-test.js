/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {getInternalReactConstants} from '../DevToolsFiberInternalReactConstants';

describe('DevToolsFiberInternalReactConstants', () => {
  describe('ReactTypeOfWork', () => {
    // @reactVersion >= 16.0
    it('should return correct work tags for versions > 17.0.1', () => {
      const {ReactTypeOfWork} = getInternalReactConstants('18.0.0');
      expect(ReactTypeOfWork.FunctionComponent).toBe(0);
      expect(ReactTypeOfWork.ClassComponent).toBe(1);
      expect(ReactTypeOfWork.HostRoot).toBe(3);
      expect(ReactTypeOfWork.HostComponent).toBe(5);
      expect(ReactTypeOfWork.HostText).toBe(6);
      expect(ReactTypeOfWork.Fragment).toBe(7);
      expect(ReactTypeOfWork.SuspenseComponent).toBe(13);
      expect(ReactTypeOfWork.MemoComponent).toBe(14);
      expect(ReactTypeOfWork.LazyComponent).toBe(16);
      expect(ReactTypeOfWork.HostHoistable).toBe(26);
      expect(ReactTypeOfWork.HostSingleton).toBe(27);
      expect(ReactTypeOfWork.IncompleteFunctionComponent).toBe(28);
      expect(ReactTypeOfWork.Throw).toBe(29);
      expect(ReactTypeOfWork.ViewTransitionComponent).toBe(30);
      expect(ReactTypeOfWork.ActivityComponent).toBe(31);
    });

    // @reactVersion >= 16.0
    it('should return correct work tags for 17.0.0-alpha', () => {
      const {ReactTypeOfWork} = getInternalReactConstants('17.0.0');
      expect(ReactTypeOfWork.FunctionComponent).toBe(0);
      expect(ReactTypeOfWork.ClassComponent).toBe(1);
      expect(ReactTypeOfWork.HostRoot).toBe(3);
      expect(ReactTypeOfWork.HostHoistable).toBe(-1);
      expect(ReactTypeOfWork.HostSingleton).toBe(-1);
      expect(ReactTypeOfWork.LegacyHiddenComponent).toBe(24);
      expect(ReactTypeOfWork.OffscreenComponent).toBe(23);
      expect(ReactTypeOfWork.CacheComponent).toBe(-1);
      expect(ReactTypeOfWork.IncompleteFunctionComponent).toBe(-1);
      expect(ReactTypeOfWork.Throw).toBe(-1);
      expect(ReactTypeOfWork.ViewTransitionComponent).toBe(-1);
      expect(ReactTypeOfWork.ActivityComponent).toBe(-1);
    });

    // @reactVersion >= 16.0
    it('should return correct work tags for 16.6.0-beta.0+', () => {
      const {ReactTypeOfWork} = getInternalReactConstants('16.6.0');
      expect(ReactTypeOfWork.FunctionComponent).toBe(0);
      expect(ReactTypeOfWork.ClassComponent).toBe(1);
      expect(ReactTypeOfWork.MemoComponent).toBe(14);
      expect(ReactTypeOfWork.SimpleMemoComponent).toBe(15);
      expect(ReactTypeOfWork.LazyComponent).toBe(16);
      expect(ReactTypeOfWork.LegacyHiddenComponent).toBe(-1);
      expect(ReactTypeOfWork.CacheComponent).toBe(-1);
    });

    // @reactVersion >= 16.0
    it('should return correct work tags for 16.4.3-alpha+', () => {
      const {ReactTypeOfWork} = getInternalReactConstants('16.5.0');
      expect(ReactTypeOfWork.ClassComponent).toBe(2);
      expect(ReactTypeOfWork.FunctionComponent).toBe(0);
      expect(ReactTypeOfWork.HostRoot).toBe(5);
      expect(ReactTypeOfWork.HostComponent).toBe(7);
      expect(ReactTypeOfWork.HostText).toBe(8);
      expect(ReactTypeOfWork.Fragment).toBe(9);
      expect(ReactTypeOfWork.Mode).toBe(10);
      expect(ReactTypeOfWork.Profiler).toBe(15);
      expect(ReactTypeOfWork.MemoComponent).toBe(-1);
      expect(ReactTypeOfWork.LazyComponent).toBe(-1);
    });

    // @reactVersion >= 16.0
    it('should return correct work tags for versions < 16.4.3-alpha', () => {
      const {ReactTypeOfWork} = getInternalReactConstants('16.3.0');
      expect(ReactTypeOfWork.ClassComponent).toBe(2);
      expect(ReactTypeOfWork.FunctionComponent).toBe(1);
      expect(ReactTypeOfWork.IndeterminateComponent).toBe(0);
      expect(ReactTypeOfWork.HostRoot).toBe(3);
      expect(ReactTypeOfWork.HostComponent).toBe(5);
      expect(ReactTypeOfWork.HostText).toBe(6);
      expect(ReactTypeOfWork.Fragment).toBe(10);
      expect(ReactTypeOfWork.CoroutineComponent).toBe(7);
      expect(ReactTypeOfWork.CoroutineHandlerPhase).toBe(8);
      expect(ReactTypeOfWork.YieldComponent).toBe(9);
    });
  });

  describe('ReactPriorityLevels', () => {
    // @reactVersion >= 16.0
    it('should return pre-17.0.2 priority levels for older versions', () => {
      const {ReactPriorityLevels} = getInternalReactConstants('16.9.0');
      expect(ReactPriorityLevels.ImmediatePriority).toBe(99);
      expect(ReactPriorityLevels.UserBlockingPriority).toBe(98);
      expect(ReactPriorityLevels.NormalPriority).toBe(97);
      expect(ReactPriorityLevels.LowPriority).toBe(96);
      expect(ReactPriorityLevels.IdlePriority).toBe(95);
      expect(ReactPriorityLevels.NoPriority).toBe(90);
    });

    // @reactVersion >= 16.0
    it('should return post-17.0.2 priority levels for newer versions', () => {
      const {ReactPriorityLevels} = getInternalReactConstants('18.0.0');
      expect(ReactPriorityLevels.ImmediatePriority).toBe(1);
      expect(ReactPriorityLevels.UserBlockingPriority).toBe(2);
      expect(ReactPriorityLevels.NormalPriority).toBe(3);
      expect(ReactPriorityLevels.LowPriority).toBe(4);
      expect(ReactPriorityLevels.IdlePriority).toBe(5);
      expect(ReactPriorityLevels.NoPriority).toBe(0);
    });
  });

  describe('StrictModeBits', () => {
    // @reactVersion >= 16.0
    it('should return 0 for versions before 16.3.0', () => {
      const {StrictModeBits} = getInternalReactConstants('16.2.0');
      expect(StrictModeBits).toBe(0);
    });

    // @reactVersion >= 16.0
    it('should return 0b10 for versions 16.3.0 - 16.8.x', () => {
      const {StrictModeBits} = getInternalReactConstants('16.3.0');
      expect(StrictModeBits).toBe(0b10);
    });

    // @reactVersion >= 16.0
    it('should return 0b1 for versions 16.9.0 - 17.x', () => {
      const {StrictModeBits} = getInternalReactConstants('16.9.0');
      expect(StrictModeBits).toBe(0b1);
      const {StrictModeBits: bits17} = getInternalReactConstants('17.0.0');
      expect(bits17).toBe(0b1);
    });

    // @reactVersion >= 16.0
    it('should return 0b011000 for versions 18.0.0-alpha+', () => {
      const {StrictModeBits} = getInternalReactConstants('18.0.0');
      expect(StrictModeBits).toBe(0b011000);
    });
  });

  describe('getTypeSymbol', () => {
    // @reactVersion >= 16.0
    it('should return symbol string for symbol types', () => {
      const {getTypeSymbol} = getInternalReactConstants('18.0.0');
      const sym = Symbol.for('test.symbol');
      expect(getTypeSymbol(sym)).toBe(sym.toString());
    });

    // @reactVersion >= 16.0
    it('should return $$typeof for object types', () => {
      const {getTypeSymbol} = getInternalReactConstants('18.0.0');
      const obj = {$$typeof: 42};
      expect(getTypeSymbol(obj)).toBe(42);
    });

    // @reactVersion >= 16.0
    it('should return the value itself for primitives', () => {
      const {getTypeSymbol} = getInternalReactConstants('18.0.0');
      expect(getTypeSymbol(123)).toBe(123);
      expect(getTypeSymbol('string')).toBe('string');
    });

    // @reactVersion >= 16.0
    it('should handle null and undefined', () => {
      const {getTypeSymbol} = getInternalReactConstants('18.0.0');
      expect(getTypeSymbol(null)).toBe(null);
      expect(getTypeSymbol(undefined)).toBe(undefined);
    });
  });

  describe('getDisplayNameForFiber', () => {
    // @reactVersion >= 16.0
    it('should return display name for FunctionComponent', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      function MyComponent() {}
      const fiber = {
        tag: ReactTypeOfWork.FunctionComponent,
        type: MyComponent,
        elementType: MyComponent,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('MyComponent');
    });

    // @reactVersion >= 16.0
    it('should return display name for ClassComponent', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      class MyClass {}
      const fiber = {
        tag: ReactTypeOfWork.ClassComponent,
        type: MyClass,
        elementType: MyClass,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('MyClass');
    });

    // @reactVersion >= 16.0
    it('should return "Fragment" for Fragment tag', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.Fragment,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('Fragment');
    });

    // @reactVersion >= 16.0
    it('should return "Suspense" for SuspenseComponent tag', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.SuspenseComponent,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('Suspense');
    });

    // @reactVersion >= 16.0
    it('should return host component type for HostComponent', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.HostComponent,
        type: 'div',
        elementType: 'div',
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('div');
    });

    // @reactVersion >= 16.0
    it('should return null for HostText', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.HostText,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe(null);
    });

    // @reactVersion >= 16.0
    it('should return "Activity" for ActivityComponent', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.ActivityComponent,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('Activity');
    });

    // @reactVersion >= 16.0
    it('should return "ViewTransition" for ViewTransitionComponent', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.ViewTransitionComponent,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('ViewTransition');
    });

    // @reactVersion >= 16.0
    it('should return "Profiler" for Profiler tag', () => {
      const {getDisplayNameForFiber, ReactTypeOfWork} =
        getInternalReactConstants('18.0.0');
      const fiber = {
        tag: ReactTypeOfWork.Profiler,
        type: null,
        elementType: null,
        memoizedState: null,
        updateQueue: null,
      };
      expect(getDisplayNameForFiber(fiber)).toBe('Profiler');
    });
  });

  describe('SuspenseyImagesMode', () => {
    // @reactVersion >= 16.0
    it('should return the correct bitmask', () => {
      const {SuspenseyImagesMode} = getInternalReactConstants('18.0.0');
      expect(SuspenseyImagesMode).toBe(0b0100000);
    });
  });
});
