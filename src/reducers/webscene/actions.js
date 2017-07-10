export const SELECTION_ADD = 'SELECTION_ADD';
export const SELECTION_REMOVE = 'SELECTION_REMOVE';
export const SELECTION_RESET = 'SELECTION_RESET';
export const VIEW_CHANGE = 'VIEW_CHANGE';


export function selectionAdd(OID) {
  return { 
  	type: SELECTION_ADD, 
  	OID
  };
};

export function selectionRemove(OID) {
  return { 
  	type: SELECTION_REMOVE, 
  	OID
  };
};

export function selectionReset() {
  return { 
  	type: SELECTION_RESET
  };
};

export function viewChange(view) {
  return { 
  	type: VIEW_CHANGE, 
  	view 
  };
}


