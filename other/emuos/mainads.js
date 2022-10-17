
          const cons = document.getElementsByClassName("adcontainer");
          const arr = [...cons];
          arr.forEach(item => {
            const adScript = document.createElement("script");
            adScript.async = true;
            adScript.src =
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2209834467602790";
            adScript.crossOrigin = "anonymous";

            const adIns = document.createElement("ins");
            adIns.setAttribute("class", "adsbygoogle");
            adIns.setAttribute(
                "style",
                "display:block;width:160px;height:600px;margin: 12vh auto;"
            );
            adIns.setAttribute("data-ad-client", "ca-pub-2209834467602790");
            adIns.setAttribute("data-ad-slot", "4749512883");

            const adScript2 = document.createElement("script");
            adScript2.innerText =
                "(adsbygoogle = window.adsbygoogle || []).push({});";
            item.append(adScript, adIns, adScript2);
          })