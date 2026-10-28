import type { Metadata } from "next";

import { ContactAddress, LegalPage } from "../../site-components";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the focus timer app Starlit (English translation).",
};

// 英訳。正本は日本語版(/terms-of-service)。2026-10-28 オーナー了承。
export default function TermsOfServiceEnPage() {
  return (
    <LegalPage lang="en" title="Terms of Service" updatedAt="October 28, 2026">
      <p>
        These Terms of Service (the &quot;Terms&quot;) set out the conditions for using the focus timer app &quot;Starlit&quot; (the &quot;App&quot;).
        Users shall use the App after agreeing to these Terms. If you obtained the App from the App Store, you shall also comply with
        Apple&apos;s Licensed Application End User License Agreement (Standard EULA); if you obtained it from Google Play, you shall also
        comply with the Google Play Terms of Service.
      </p>

      <h2>Article 1 (Application)</h2>
      <p>These Terms apply to all relationships between the operator and users concerning the provision and use of the App.</p>

      <h2>Article 2 (Content of the App)</h2>
      <p>
        The App is a tool for recording periods of focus and reviewing them as constellations and night skies for each subject.
        If the App moves to the background while the timer is running, the focus result may be recorded as a &quot;shooting star,&quot; and no star may be lit.
      </p>
      <p>
        The App includes the Constellation Guide, which collects the constellations you have completed, and an exam countdown,
        which shows the number of days until your exam date.
      </p>
      <p>
        The App does not guarantee study results, exam results, or any health-related or work-related effect.
        For important schedules and time management, please also check for yourself.
      </p>

      <h2>Article 3 (On-Device Data)</h2>
      <p>
        Subject names, focus history, exam names and dates, notification settings, the selected sky, and similar data are, in principle,
        stored on the user&apos;s device. The App has no account registration feature and no feature for backing up data to the operator&apos;s servers.
      </p>
      <p>
        Data may be lost due to device failure or loss, OS updates, deletion of the App, or other circumstances.
        On an iPhone with iOS backup enabled, data may be backed up through Apple&apos;s mechanisms.
        The Android version of the App is not included in Android&apos;s backup feature.
      </p>

      <h2>Article 4 (In-App Purchases and Starlit+)</h2>
      <ol>
        <li>
          The App offers a paid feature, &quot;Starlit+&quot;. With Starlit+, you can use the paid skies (Dawn, Aurora, Snowy Night, Moonlit Night,
          Milky Way, Night Cherry Blossoms, and Firefly Night) and constellations available only with Starlit+.
        </li>
        <li>
          Starlit+ is available in the following plans. What you can use is the same under every plan. Prices follow the price shown on the
          purchase screen of the App Store or Google Play (each, a &quot;Store&quot;).
          <ul>
            <li>Annual plan (auto-renewing subscription, 1-year term)</li>
            <li>Monthly plan (auto-renewing subscription, 1-month term)</li>
            <li>One-time purchase (no expiration)</li>
          </ul>
        </li>
        <li>
          The annual and monthly plans renew automatically for the same term and at the same price unless you cancel.
          <ul>
            <li>
              If you purchased on the App Store, the subscription renews unless you cancel at least 24 hours before the end of each term,
              and the charge for the next term is billed to your Apple Account within 24 hours before the end of the term.
            </li>
            <li>
              If you purchased on Google Play, the subscription renews unless you cancel before the next term begins, and the charge for the
              next term is billed to the payment method registered to your Google account, in accordance with Google Play&apos;s rules.
            </li>
          </ul>
        </li>
        <li>
          Cancel in the Store where you purchased.
          <ul>
            <li>App Store: On your iPhone, open the Settings app, then open &quot;Subscriptions&quot; under your Apple Account.</li>
            <li>Google Play: In the Google Play Store app, open &quot;Payments &amp; subscriptions,&quot; then open &quot;Subscriptions.&quot;</li>
          </ul>
          Deleting the App does not cancel your subscription. If you cancel, you can use Starlit+ until the end of the period you have already
          paid for. If you cancel partway through a period, no refund is given for the remaining period.
        </li>
        <li>
          If the term of the annual or monthly plan ends and Starlit+ becomes unavailable, the following applies.
          <ul>
            <li>The paid skies become unavailable, and the sky returns to the free sky, &quot;Deep Indigo Night.&quot;</li>
            <li>
              Constellations available only with Starlit+ that were assigned to a subject while you were using Starlit+ can still be grown in
              that subject and remain in the subject&apos;s record. No new Starlit+-only constellations will be assigned.
            </li>
            <li>In the Constellation Guide, the pages for Starlit+-only constellations are not shown until you use Starlit+ again.</li>
            <li>
              Free features, such as focus records, subjects, regular constellations, the Constellation Guide, and the exam countdown, remain available.
            </li>
          </ul>
        </li>
        <li>If you purchase the one-time purchase, you can use Starlit+ without any time limit.</li>
        <li>
          If you have already purchased the individual skies (Dawn, Aurora, and Snowy Night) or the three-sky pack previously sold in the App
          Store version, the skies you purchased remain available. New sales of these items have ended.
        </li>
        <li>The free sky, &quot;Deep Indigo Night,&quot; remains available without any purchase.</li>
        <li>
          Purchased entitlements can be restored with &quot;Restore purchases&quot; in the App, using the same Apple Account or Google account you
          used to purchase. The annual and monthly plans are restored only while the term is active. Entitlements purchased on the App Store
          and those purchased on Google Play cannot be transferred to each other.
        </li>
        <li>The handling of payment, renewal, cancellation, and refunds follows the terms and procedures of the Store where you purchased.</li>
      </ol>

      <h2>Article 5 (Prohibited Acts)</h2>
      <p>In using the App, users must not engage in any of the following acts.</p>
      <ul>
        <li>Acts that violate laws or regulations or public order and morals</li>
        <li>Acts that infringe the App or the rights of third parties</li>
        <li>
          Acts that circumvent the purchase features through fraudulent purchases, alteration of entitlement information, reverse engineering, or the like
        </li>
        <li>Acts that interfere with the provision or operation of the App</li>
      </ul>

      <h2>Article 6 (Intellectual Property Rights)</h2>
      <p>
        Intellectual property rights in the App, its screens, text, graphics, and other content belong to the operator or the rightful rights holders.
        These Terms do not transfer to users any rights beyond what is necessary for personal, non-commercial use.
      </p>

      <h2>Article 7 (Changes to and Termination of the Service)</h2>
      <p>
        The operator may change the content of the App or terminate its provision where there is a reasonable need, such as maintenance or
        compliance with laws or Store requirements. The handling of purchased content follows applicable laws and the terms of the Store where
        it was purchased.
      </p>

      <h2>Article 8 (Disclaimer and Limitation of Liability)</h2>
      <p>
        The operator does not guarantee that the App will be free of any defects, interruptions, or data loss. The operator&apos;s liability is
        limited to the extent permitted by the Consumer Contract Act of Japan and other applicable laws. Where laws do not permit exemption or
        limitation of liability, such as in cases of the operator&apos;s intent or gross negligence, the limitation in this Article does not apply.
      </p>

      <h2>Article 9 (Changes to These Terms)</h2>
      <p>
        The operator may change these Terms in accordance with laws and regulations, taking into account the necessity of the change and the
        reasonableness of its content. Important changes will be announced in the App or on this page.
      </p>

      <h2>Article 10 (Governing Law and Jurisdiction)</h2>
      <p>
        These Terms are governed by the laws of Japan. Jurisdiction over disputes concerning the App follows the Code of Civil Procedure of
        Japan and other applicable laws.
      </p>

      <h2>Article 11 (Contact)</h2>
      <ContactAddress lang="en" />

      <h2>Article 12 (Translation)</h2>
      <p>
        The Japanese text of these Terms is the governing version. If there is any discrepancy between an English or other translation of
        these Terms and the <a href="/terms-of-service">Japanese version</a>, the Japanese version prevails.
      </p>
    </LegalPage>
  );
}
