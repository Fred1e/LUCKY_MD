const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
async function getOAuthToken() {
  const _0x1800eb = Buffer.from("QGaqwC8O8nJev72LGOiUxEBZe3ZTVo9wEfGkWAEaTgrZlAC5:MANcOYqdyGatG7AXPrckj5AtQnvLWEKxJtxibgJqFxtgUxiiAAqwOlbb3WE2gAeP").toString("base64");
  try {
    const _0x4f97d8 = await axios.get("https://sandbox.vodacom.co.tz/oauth/v1/generate?grant_type=client_credentials", {
      'headers': {
        'Authorization': "Basic " + _0x1800eb
      }
    });
    return _0x4f97d8.data.access_token;
  } catch (_0x53426d) {
    console.error("Error generating OAuth token:", _0x53426d.message);
    throw new Error("Failed to authenticate with M-Pesa API.");
  }
}
async function topUpAirtime(_0x29df76, _0x36bcae) {
  const _0x59f076 = await getOAuthToken();
  const _0x56b7d8 = {
    'CommandID': "CustomerPayBillOnline",
    'Amount': _0x36bcae,
    'Msisdn': _0x29df76,
    'BillRefNumber': "TopUp"
  };
  try {
    const _0x3bf04a = await axios.post("https://sandbox.vodacom.co.tz/mpesa/stkpush/v1/processrequest", _0x56b7d8, {
      'headers': {
        'Authorization': "Bearer " + _0x59f076
      }
    });
    return _0x3bf04a.data;
  } catch (_0x4740ed) {
    console.error("Error performing top-up:", _0x4740ed.message);
    throw new Error("Failed to top-up airtime.");
  }
}
async function sendMoney(_0xa64ce1, _0x3c87fa) {
  const _0x297c78 = await getOAuthToken();
  const _0xb4b207 = {
    'CommandID': "Pay",
    'Amount': _0x3c87fa,
    'Msisdn': _0xa64ce1,
    'BillRefNumber': "Transfer"
  };
  try {
    const _0x165a69 = await axios.post("https://sandbox.vodacom.co.tz/mpesa/sendmoney/v1/processrequest", _0xb4b207, {
      'headers': {
        'Authorization': "Bearer " + _0x297c78
      }
    });
    return _0x165a69.data;
  } catch (_0x5690a4) {
    console.error("Error sending money:", _0x5690a4.message);
    throw new Error("Failed to send money.");
  }
}
const validPins = new Set();
zokou({
  'nomCom': "mpesa",
  'reaction': '💵',
  'categorie': "mpesa"
}, async (_0xd1eb79, _0x3f6804, _0x2bb9e5) => {
  const {
    repondre: _0x57b852,
    arg: _0x54803c
  } = _0x2bb9e5;
  const _0x1e99e1 = _0x54803c[0];
  try {
    switch (_0x1e99e1) {
      case "menu":
        const _0x4adada = _0x54803c[1];
        if (!_0x4adada) {
          return _0x57b852("Usage: .mpesa menu [PIN]");
        }
        if (!validPins.has(_0x4adada)) {
          return _0x57b852("Invalid PIN. Access denied.");
        }
        await _0x57b852("M-Pesa Menu:\n- *Top-Up Airtime*: .mpesa topup [phone] [amount]\n- *Send Money*: .mpesa send [phone] [amount]\n- *Check Balance*: .mpesa balance\n ");
        break;
      case "topup":
        const _0x2bbb72 = _0x54803c[1];
        const _0x300623 = _0x54803c[2];
        if (!_0x2bbb72 || !_0x300623) {
          return _0x57b852("Usage: .mpesa topup [phone] [amount]");
        }
        await _0x57b852("Processing your airtime top-up...");
        const _0x1bb6f8 = await topUpAirtime(_0x2bbb72, _0x300623);
        await _0x57b852("Top-up response: " + JSON.stringify(_0x1bb6f8));
        break;
      case "send":
        const _0x321480 = _0x54803c[1];
        const _0x2fe3d2 = _0x54803c[2];
        if (!_0x321480 || !_0x2fe3d2) {
          return _0x57b852("Usage: .mpesa send [phone] [amount]");
        }
        await _0x57b852("Processing your money transfer...");
        const _0x3732d0 = await sendMoney(_0x321480, _0x2fe3d2);
        await _0x57b852("Send money response: " + JSON.stringify(_0x3732d0));
        break;
      case "balance":
        await _0x57b852("Checking your M-Pesa balance...");
        await _0x57b852("To check your balance, please visit the M-Pesa app or dial *102#.");
        break;
      default:
        await _0x57b852("Unknown command. Please use .mpesa menu to see available options.");
    }
  } catch (_0x337f6e) {
    console.error("Error processing M-Pesa command:", _0x337f6e.message);
    _0x57b852("Error processing M-Pesa command.");
  }
});
