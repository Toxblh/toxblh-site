import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

class Main extends Component {
  render() {
    return (
      <Content>
        <h1>
          Если Telegram показывает постоянный
          Connection…
        </h1>
        <p>
          Вы любите Telegram, но вне дома на вашем любимом mac, он не работает? Обидная
          ситуация, будем исправлять. Нам понадобиться совсем немного времени, любой VPN и
          немного времени.
        </p>
        <p>Нужно в /etc/ppp/ создать файл:</p>
        <pre>
          <code class="language-bash">touch /etc/ppp/ip-up</code>
        </pre>
        <p>
          ip-up, вносим в него route до Telegram серверов и всё остальное будет
          происходить само при подключении.
        </p>
        <p>содержимое для файла ip-up:</p>
        <pre>
          <code class="language-bash">
            <span class="hljs-shebang">#!/bin/sh</span>
            /sbin/route add <span class="hljs-number">
              149.154
            </span>.<span class="hljs-number">160.0</span>/<span class="hljs-number">
              20
            </span>{' '}
            -interface <span class="hljs-variable">$1</span>
            /sbin/route add <span class="hljs-number">
              91.108
            </span>.<span class="hljs-number">4.0</span>/<span class="hljs-number">
              22
            </span>{' '}
            -interface <span class="hljs-variable">$1</span>
            /sbin/route add <span class="hljs-number">
              91.108
            </span>.<span class="hljs-number">56.0</span>/<span class="hljs-number">
              22
            </span>{' '}
            -interface <span class="hljs-variable">$1</span>
          </code>
        </pre>
        <p>всё!</p>

        <h2>Как установить SSL на lighttpd сервер от StartSSL</h2>
        <p>
          Для того чтобы заработал SSL на Lighttpd и он показал все галочки на{' '}
          <a href="https://www.geocerts.com/ssl_checker">GeoCarts.com</a> и не возникало
          проблем на мобильных устройствах написал инструкцию, как сделать это быстро и
          безболелезнено:
          <br />
          <br />
          Вы уже должны получить сертификаты и приватный ключ на{' '}
          <a href="http://habrahabr.ru/post/127643/">StartSSL.com</a>
          <br />
          <br />
          Далее добавляем строчки в lighttpd.conf:
          <br />
          <br />
          <pre>
            <code class="bash">
              $SERVER["socket"] == ":443" {'{'}
              ssl.engine = "enable" ssl.pemfile = "/path/to/host.pem" ssl.ca-file =
              "/path/to/ssl.crt" }
            </code>
          </pre>
          <br />
          Теперь создадим host.pem и ssl.crt нужные нам<br />
          1. Расшифруем полученный приватный ключ командой:<br />
          <pre>
            <code class="bash">openssl rsa -in ssl.key -out de_ssl.key</code>
          </pre>
          потребуется ввести пароль который Вы указали при создании<br />
          <br />
          2. Из скаченых сертификатов для Other Server создадим host.pem<br />
          <pre>
            <code class="bash">cat de_ssl.key 2_your_domain.crt > host.pem</code>
          </pre>
          <br />
          3. Так же из сертификатов тех же создаём ssl.crt<br />
          Сначала скачиваем командой дополнительный файл<br />
          <pre>
            <code class="bash">
              wget http://www.startssl.com/certs/sub.class1.server.ca.pem
            </code>
          </pre>
          <br />
          И создаём нужный сертификат<br />
          <pre>
            <code class="bash">
              cat 1_Intermediate.crt sub.class1.server.ca.pem > ssl.crt
            </code>
          </pre>
          <br />
          4. Остаётся только перезагрузить lighttpd<br />
          <pre>
            <code class="bash">service lighttpd restart</code>
          </pre>
        </p>
        <h2>How to install SSL on lighttpd server from StartSSL</h2>
        <p>
          In order to make SSL on Lighttpd and he showed all the checkboxes on{' '}
          <a href="https://www.geocerts.com/ssl_checker">GeoCarts.com</a> and no problems
          on mobile devices written instructions on how to do it quickly: You should
          already get the certificates and the private key on{' '}
          <a href="http://habrahabr.ru/post/127643/">StartSSL.com</a>
          <br />
          <br />
          Next, add the line in lighttpd.conf:
          <br />
          <br />
          <pre>
            <code class="bash">
              $ SERVER ["socket"] == ": 443," {'{'}
              ssl.engine = "enable"     ssl.pemfile = "/path/to/host.pem"     ssl.ca-file
              = "/path/to/ssl.crt" }
            </code>
          </pre>
          Now create host.pem and we need ssl.crt 1. Decipher the resulting private key
          command:
          <pre>
            <code class="bash">openssl rsa -in ssl.key -out de_ssl.key</code>
          </pre>
          You need to enter the password you specified when creating<br />
          <br />
          2. From the downloaded Other Server Certificates to create host.pem
          <pre>
            <code class="bash">cat de_ssl.key 2_your_domain.crt> host.pem</code>
          </pre>
          <br />
          3. As of the certificates of the same create ssl.crt<br />
          First, download the additional file command
          <pre>
            <code class="bash">
              wget http://www.startssl.com/certs/sub.class1.server.ca.pem
            </code>
          </pre>
          <br />
          And create the required certificate
          <pre>
            <code class="bash">
              cat 1_Intermediate.crt sub.class1.server.ca.pem> ssl.crt
            </code>
          </pre>
          <br />
          4. We can only restart lighttpd
          <pre>
            <code class="bash">service lighttpd restart</code>
          </pre>
        </p>
        <h2>Портфолио</h2>
        <p>
          Добавлен раздел <a href="/portfolio">портфолио</a>. В данном разделе уже
          размещенны мои работы
        </p>
        <h2>Видос старинный</h2>
        <p>
          <iframe
            title="Видос старинный"
            width="640"
            height="480"
            src="//www.youtube.com/embed/AfYPzS1NZSI"
            frameborder="0"
            allowfullscreen
          />
        </p>
      </Content>
    )
  }
}

export default Main
