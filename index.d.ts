/**
 * Type definations for Proxy Auto-Configuration (PAC) file
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
 * Source code:
 * - Firefox: https://github.com/ldx/libpac/blob/master/nsProxyAutoConfig.h
 * - Chromium: https://github.com/chromium/chromium/tree/master/services/proxy_resolver
 *   - https://github.com/chromium/chromium/blob/master/services/proxy_resolver/pac_js_library.h
 *   - https://github.com/chromium/chromium/blob/master/services/proxy_resolver/proxy_resolver_v8.cc
 */
/**
 * True if and only if there is no domain name in the hostname (no dots).
 * @param host - The hostname from the URL (excluding port number).
 * @example
 * isPlainHostName("www.mozilla.org") // false
 * isPlainHostName("www") // true
 */
declare function isPlainHostName(host: string): boolean;

/**
 * Returns true if and only if the domain of hostname matches.
 * @param host - Is the hostname from the URL.
 * @param domain - Is the domain name to test the hostname against.
 * @example
 * dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
 * dnsDomainIs("www", ".mozilla.org") // false
 */
declare function dnsDomainIs(host: string, domain: string): boolean;

/**
 * Is true if the hostname matches exactly the specified hostname,
 * or if there is no domain name part in the hostname, but the
 * unqualified hostname matches.
 * @param host - The hostname from the URL.
 * @param hostdom - Fully qualified hostname to match against.
 * @example
 * localHostOrDomainIs("www.mozilla.org" , "www.mozilla.org") // true (exact match)
 * localHostOrDomainIs("www"             , "www.mozilla.org") // true (hostname match, domain not specified)
 * localHostOrDomainIs("www.google.com"  , "www.mozilla.org") // false (domain name mismatch)
 * localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (hostname mismatch)
 */
declare function localHostOrDomainIs(host: string, hostdom: string): boolean;

/**
 * Tries to resolve the hostname. Returns true if succeeds.
 * @param host - is the hostname from the URL.
 * @example
 * isResolvable("www.mozilla.org") // true
 */
declare function isResolvable(host: string): boolean;

/**
 * True if and only if the IP address of the host matches the specified IP address pattern.
 * Pattern and mask specification is done the same way as for SOCKS configuration.
 * @param host - a DNS hostname, or IP address. If a hostname is passed, it will be resolved into an IP address by this function.
 * @param pattern - an IP address pattern in the dot-separated format.
 * @param mask - mask for the IP address pattern informing which parts of the IP address should be matched against. 0 means ignore, 255 means match.
 * @example
 * isInNet(host, "63.245.213.24", "255.255.255.255"); // true
 */
declare function isInNet(host: string, pattern: string, mask: string): boolean;

/**
 * Resolves the given DNS hostname into an IP address, and returns it in the dot-separated format as a string.
 * @param host - hostname to resolve.
 * @example
 * dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"
 */
declare function dnsResolve(host: string): string;

/**
 * Concatenates the four dot-separated bytes into one 4-byte word and converts it to decimal.
 * @param ipaddr - Any dotted address such as an IP address or mask.
 * @example
 * convert_addr("104.16.41.2"); // returns the decimal number 1745889538
 */
declare function convert_addr(ipaddr: string): number;

/**
 * Returns the server IP address of the machine Firefox is running on,
 * as a string in the dot-separated integer format. `myIpAddress()` returns
 * the same IP address as the server address returned by `nslookup localhost`
 * on a Linux machine. It does not return the public IP address.
 * @example
 * myIpAddress() //returns the string "127.0.1.1" if you were running Firefox on that localhost
 */
declare function myIpAddress(): string;

/**
 * Returns the number (integer) of DNS domain levels (number of dots) in the hostname.
 * @param host - is the hostname from the URL.
 * @example
 * dnsDomainLevels("www");             // 0
 * dnsDomainLevels("mozilla.org");     // 1
 * dnsDomainLevels("www.mozilla.org"); // 2
 */
declare function dnsDomainLevels(host: string): number;

/**
 * Support for particular glob expression syntax varies across browsers:
 * `*` (match any number of characters) and `?` (match one character)
 * are always supported, while `[characters]` and `[^characters]` are
 * additionally supported by some implementations (including Firefox).
 *
 * If supported by the client, JavaScript regular expressions typically
 * provide a more powerful and consistent way to pattern-match URLs (and
 * other strings).
 * @param str - is any string to compare (e.g. the URL, or the hostname).
 * @param shexp - is a shell expression to compare against.
 * @example
 * shExpMatch("http://home.netscape.com/people/ari/index.html", "*\/ari/*"); // returns true
 * shExpMatch("http://home.netscape.com/people/montulli/index.html", "*\/ari/*"); // returns false
 */
declare function shExpMatch(str: string, shexp: string): boolean;

type Weekend = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
type Month =
  | 'JAN'
  | 'FEB'
  | 'MAR'
  | 'APR'
  | 'MAY'
  | 'JUN'
  | 'JUL'
  | 'AUG'
  | 'SEP'
  | 'OCT'
  | 'NOV'
  | 'DEC';

declare function weekdayRange(wd1: Weekend, gmt?: 'GMT'): boolean;
declare function weekdayRange(wd1: Weekend, wd2: Weekend, gmt?: 'GMT'): boolean;

declare function dateRange(day: number, gmt?: 'GMT'): boolean;
declare function dateRange(day1: number, day2: number, gmt?: 'GMT'): boolean;
declare function dateRange(year1: number, year2: number, gmt?: 'GMT'): boolean;
declare function dateRange(day: number, month: Month, gmt?: 'GMT'): boolean;
declare function dateRange(
  day: number,
  month: Month,
  year: number,
  gmt?: 'GMT'
): boolean;
declare function dateRange(
  day1: number,
  month1: Month,
  day2: number,
  month2: Month,
  gmt?: 'GMT'
): boolean;
declare function dateRange(
  month1: Month,
  year1: number,
  month2: Month,
  year2: number,
  gmt?: 'GMT'
): boolean;
declare function dateRange(
  day1: number,
  month1: Month,
  year1: number,
  day2: number,
  month2: Month,
  year2: number,
  gmt?: 'GMT'
): boolean;

declare function timeRange(
  hour: number,
  gmt?: 'GMT'
): boolean;
declare function timeRange(
  hour1: number,
  hour2: number,
  gmt?: 'GMT'
): boolean;
declare function timeRange(
  hour1: number,
  min1: Month,
  hour2: number,
  min2: Month,
  gmt?: 'GMT'
): boolean;
declare function timeRange(
  hour1: number,
  min1: Month,
  sec1: number,
  hour2: number,
  min2: Month,
  sec2: number,
  gmt?: 'GMT'
): boolean;

type Hostname = string;
type Port = number;
type Host = `${Hostname}:${Port}` | Hostname;
type Direct = 'DIRECT';
type Proxy = `PROXY ${Host}`;
type Socks = `SOCKS ${Host}` | `SOCKS4 ${Host}` | `SOCKS5 ${Host}`;
type FindProxyForURLResult =
  Direct |
  Proxy |
  Socks |
  `${Proxy}; ${Direct}` |
  `${Socks}; ${Direct}` |
  `${Proxy}; ${Proxy}` |
  `${Proxy}; ${Socks}` |
  `${Proxy}; ${Proxy}; ${Direct}` |
  `${Proxy}; ${Socks}; ${Direct}`;

/**
 * Returns a string describing the configuration. The format of this string is
 * defined in return value format below.
 * @param url - The URL being accessed. The path and query components of
 * `https://` URLs are stripped. In Chrome (versions 52 to 73), you can
 * disable this by setting `PacHttpsUrlStrippingEnabled` to `false` in
 * policy or by launching with the `--unsafe-pac-url` command-line flag
 * (in Chrome 74, only the flag works, and from 75 onward, there is no way
 * to disable path-stripping; as of Chrome 81, path-stripping does not apply
 * to HTTP URLs, but there is interest in changing this behavior to match
 * HTTPS); in Firefox, the preference is
 * `network.proxy.autoconfig_url.include_path`.
 * @param host - The hostname extracted from the URL. This is only for
 * convenience; it is the same string as between `://` and the first `:` or
 * `/` after that. The port number is not included in this parameter.
 * It can be extracted from the URL when necessary.
 * @example
 * 'DIRECT'
 * 'PROXY proxy.mydomain.com:8080'
 * 'PROXY w3proxy.mozilla.org:8080; DIRECT'
 * 'PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081'
 * 'PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT'
 * 'PROXY w3proxy.netscape.com:8080; SOCKS socks:1080'
 */
declare function FindProxyForURL(url: string, host: string): FindProxyForURLResult;
