const {
  ezra
} = require('../fredi/ezra');
ezra({
  'nomCom': "tictac",
  'categorie': "Games",
  'reaction': '🎮'
}, async (_0x322626, _0x34cd39, _0x5f5331) => {
  const {
    repondre: _0x1a5b7e,
    ms: _0x545f7a,
    auteurMessage: _0x52bc7e,
    auteurMsgRepondu: _0x30c2ec,
    msgRepondu: _0x42d3ab,
    arg: _0x13f50e,
    idBot: _0xc37cda
  } = _0x5f5331;
  if (_0x42d3ab) {
    _0x34cd39.sendMessage(_0x322626, {
      'text': '@' + _0x52bc7e.split('@')[0x0] + " invites @" + _0x30c2ec.split('@')[0x0] + " to play Tic-Tac-Toe. To accept the challenge, type 'yes'.",
      'mentions': [_0x52bc7e, _0x30c2ec]
    });
    try {
      const _0x4c52c4 = await _0x34cd39.awaitForMessage({
        'sender': _0x30c2ec,
        'chatJid': _0x322626,
        'timeout': 0x7530
      });
      if (_0x4c52c4.message.conversation.toLowerCase() === "yes" || _0x4c52c4.message.extendedTextMessage.text.toLowerCase() === "yes") {
        let _0x53ba84 = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
        let _0x4e390e = _0x52bc7e;
        let _0x3649f4 = false;
        while (!_0x3649f4) {
          let _0x485404 = "Current board:\n" + _0x53ba84.map(_0x10f832 => _0x10f832.join(" | ")).join("\n---|---|---\n") + "\n\n@" + _0x4e390e.split('@')[0x0] + ", make your move (choose a number from the board).";
          _0x34cd39.sendMessage(_0x322626, {
            'text': _0x485404,
            'mentions': [_0x4e390e]
          });
          const _0x454e45 = await _0x34cd39.awaitForMessage({
            'sender': _0x4e390e,
            'chatJid': _0x322626,
            'timeout': 0x7530
          });
          const _0x489f03 = _0x454e45.message.conversation;
          const _0x36a5c9 = _0x53ba84.flat().indexOf(_0x489f03);
          if (_0x36a5c9 !== -0x1) {
            const _0x257ae3 = Math.floor(_0x36a5c9 / 0x3);
            const _0x412fd6 = _0x36a5c9 % 0x3;
            _0x53ba84[_0x257ae3][_0x412fd6] = _0x4e390e === _0x52bc7e ? 'X' : 'O';
            if (checkWin(_0x53ba84, _0x4e390e === _0x52bc7e ? 'X' : 'O')) {
              _0x34cd39.sendMessage(_0x322626, {
                'text': "Player @" + _0x4e390e.split('@')[0x0] + " wins!",
                'mentions': [_0x52bc7e, _0x30c2ec]
              });
              _0x3649f4 = true;
            } else if (_0x53ba84.flat().every(_0x34f282 => _0x34f282 === 'X' || _0x34f282 === 'O')) {
              _0x34cd39.sendMessage(_0x322626, {
                'text': "The game is a draw!",
                'mentions': [_0x52bc7e, _0x30c2ec]
              });
              _0x3649f4 = true;
            } else {
              _0x4e390e = _0x4e390e === _0x52bc7e ? _0x30c2ec : _0x52bc7e;
            }
          } else {
            _0x34cd39.sendMessage(_0x322626, {
              'text': "Invalid move. Please choose a number from the board.",
              'mentions': [_0x4e390e]
            });
          }
        }
      } else {
        _0x1a5b7e("Invitation refused");
      }
    } catch (_0x36914a) {
      if (_0x36914a.message === "Timeout") {
        _0x34cd39.sendMessage(_0x322626, {
          'text': '@' + _0x30c2ec.split('@')[0x0] + " took too long to respond. Game canceled.",
          'mentions': [_0x52bc7e, _0x30c2ec]
        });
      } else {
        console.error(_0x36914a);
      }
    }
  } else {
    _0x1a5b7e("Tic-Tac-Toe is a game for two players. Mention a friend to invite them.");
  }
});
function checkWin(_0x57e57a, _0x5a5651) {
  const _0x305400 = [[0x0, 0x1, 0x2], [0x3, 0x4, 0x5], [0x6, 0x7, 0x8], [0x0, 0x3, 0x6], [0x1, 0x4, 0x7], [0x2, 0x5, 0x8], [0x0, 0x4, 0x8], [0x2, 0x4, 0x6]];
  return _0x305400.some(_0x41f141 => _0x41f141.every(_0x258db2 => _0x57e57a[Math.floor(_0x258db2 / 0x3)][_0x258db2 % 0x3] === _0x5a5651));
    }
