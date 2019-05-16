import uuid from uuid;

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUp(id) {
	return {
		type: THUMB_U,
		id
	}
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id
	}
}