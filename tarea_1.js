function containAllRots(strng, arr) {
    for (var i = 0; i < strng.length; i++) {
    if (!arr.includes(strng.substring(i, strng.length) + strng.substring(0, i))) {
    return false;
    }
    }
    return true;
    }

