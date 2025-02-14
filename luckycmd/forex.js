const { ezra } = require("../fredi/ezra");
const fetch = require("node-fetch");
ezra(
  {
    nomCom: "forex1",
    category: "forex",
    desc: "Fetches the latest forex news",
    reaction: "🤦",
  },
  async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
    try {
      const apiUrl =
        "https://api.polygon.io/v2/reference/news?apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45";
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        return message.send("*No forex news available at the moment.*");
      }

      const articles = data.results;
      let output = "";
      articles.forEach((article, index) => {
        output += `*Title:* ${article.title}\n`;
        output += `*Publisher:* ${article.publisher.name}\n`;
        output += `*Published UTC:* ${article.published_utc}\n`;
        output += `*Article URL:* ${article.article_url}\n\n`;

        if (index < articles.length - 1) {
          output += "---\n\n";
        }
      });

      return message.send(output, { quoted: message });
    } catch (error) {
      console.error(error);
      return message.error(error, "*Failed to fetch forex news.*");
    }
  }
);
ezra(
  {
    nomCom: "fxstatus",
    category: "forex",
    desc: "Fetches the current status of the forex market",
    reaction: "🤦",
  },
  async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
    try {
      const apiUrl =
        "https://api.polygon.io/v1/marketstatus/now?apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45";
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data) {
        return message.send("*Failed to fetch forex market status.*");
      }

      let output = "*Forex Market Status:*\n";
      output += `After Hours: ${data.afterHours ? "Closed" : "Open"}\n`;
      output += `Market: ${data.market ? "Open" : "Closed"}\n`;

      const currencies = data.currencies;
      output += "\n*Currencies:*\n";
      output += `Crypto: ${currencies.crypto}\n`;
      output += `FX: ${currencies.fx}\n`;

      const exchanges = data.exchanges;
      output += "\n*Exchanges:*\n";
      output += `NASDAQ: ${exchanges.nasdaq}\n`;
      output += `NYSE: ${exchanges.nyse}\n`;
      output += `OTC: ${exchanges.otc}\n`;

      const indicesGroups = data.indicesGroups;
      output += "\n*Indices Groups:*\n";
      output += `S&P: ${indicesGroups.s_and_p}\n`;
      output += `Societe Generale: ${indicesGroups.societe_generale}\n`;
      output += `MSCI: ${indicesGroups.msci}\n`;
      output += `FTSE Russell: ${indicesGroups.ftse_russell}\n`;
      output += `MStar: ${indicesGroups.mstar}\n`;
      output += `MStarC: ${indicesGroups.mstarc}\n`;
      output += `CCCY: ${indicesGroups.cccy}\n`;
      output += `CGI: ${indicesGroups.cgi}\n`;
      output += `NASDAQ: ${indicesGroups.nasdaq}\n`;
      output += `Dow Jones: ${indicesGroups.dow_jones}\n`;

      output += `\n*Server Time:* ${data.serverTime}\n`;

      return message.send(output, { quoted: message });
    } catch (error) {
      console.error(error);
      return message.error(error, "*Failed to fetch forex market status.*");
    }
  }
);

ezra(
  {
    nomCom: "fxpairs",
    category: "forex",
    desc: "Fetches a list of active forex currency pairs",
    reaction: "🤦",
  },
  async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
    try {
      const apiUrl =
        "https://api.polygon.io/v3/reference/tickers?market=fx&active=true&apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45";
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data || !data.results || data.results.length === 0) {
        return message.send("*Failed to fetch forex currency pairs.*");
      }

      let output = "*Active Forex Currency Pairs:*\n\n";
      data.results.forEach((pair) => {
        output += `${pair.ticker}: ${pair.name}\n`;
      });

      return message.send(output, { quoted: message });
    } catch (error) {
      console.error(error);
      return message.error(error, "*Failed to fetch forex currency pairs.*");
    }
  }
);
ezra(
  {
    nomCom: "fxexchange",
    category: "forex",
    desc: "Fetches the latest foreign exchange rates against the US Dollar",
    reaction: "🤦",
  },
  async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
    try {
      const currencyCode = match || "USD";
      const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currencyCode}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data || !data.rates) {
        return message.send(
          `*Failed to fetch exchange rates for ${currencyCode}.*`
        );
      }

      let output = `*Foreign Exchange Rates (${data.base})*\n\n`;
      for (const [currency, rate] of Object.entries(data.rates)) {
        output += `${currency}: ${rate.toFixed(4)}\n`;
      }

      return message.send(output, { quoted: message });
    } catch (error) {
      console.error(error);
      return message.error(error, "*Failed to fetch exchange rates.*");
    }
  }
);
ezra(
  {
    nomCom: "stocktickers",
    category: "forex",
    desc: "Fetches a list of active stock tickers",
    reaction: "🤦",
  },
  async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
    try {
      const limit = match || 100;
      const apiUrl = `https://api.polygon.io/v3/reference/tickers?active=true&limit=${limit}&apiKey=Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!data || !data.results || data.results.length === 0) {
        return message.send("*No active stock tickers found.*");
      }

      let output = `*Active Stock Tickers (Limit: ${limit}):*\n\n`;
      data.results.forEach((ticker) => {
        output += `${ticker.ticker}: ${ticker.name}\n`;
      });

      return message.send(output, { quoted: message });
    } catch (error) {
      console.error(error);
      return message.error(error, "*Failed to fetch stock tickers.*");
    }
  }
);