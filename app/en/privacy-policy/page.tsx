import type { Metadata } from "next";

import { ContactAddress, LegalPage } from "../../site-components";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the focus timer app Starlit (English translation).",
};

// 英訳。正本は日本語版(/privacy-policy)。2026-10-28 オーナー了承。
export default function PrivacyPolicyEnPage() {
  return (
    <LegalPage lang="en" title="Privacy Policy" updatedAt="October 28, 2026">
      <p>
        This Privacy Policy describes how user information is handled in the focus timer app &quot;Starlit&quot; (the &quot;App&quot;).
        This Policy applies to both the App Store version (iPhone) and the Google Play version (Android).
        The App has no account registration, no advertising, and no tracking for third-party advertising.
      </p>

      <h2>1. Information Stored on Your Device</h2>
      <p>To provide its features, the App stores the following information on the user&apos;s device.</p>
      <ul>
        <li>Subject names entered by the user</li>
        <li>The planned time, actual time, completion status, and date and time of focus sessions</li>
        <li>
          The constellations assigned to subjects (including Starlit+-only constellations), the selected sky, and the usage status of purchased skies
        </li>
        <li>Exam names and dates entered by the user</li>
        <li>Settings such as notifications on/off and whether the paywall has been shown</li>
      </ul>
      <p>
        Subject names and exam names and dates are never sent outside the device. The planned time, actual time, and completion status of focus
        sessions are sent in a form that does not identify individuals, for analyzing usage, as described in the next section. Deleting the App
        deletes the data on the device. However, on an iPhone with iOS backup enabled, the data may be included in a backup through Apple&apos;s
        mechanisms. The Android version of the App is not included in Android&apos;s backup feature.
      </p>

      <h2>2. Information Sent to External Services</h2>
      <h3>RevenueCat (managing in-app purchases)</h3>
      <p>
        We use RevenueCat, Inc. to verify in-app purchases (one-time purchases and auto-renewing subscriptions), to grant, renew, and restore
        purchased entitlements, to prevent fraud, and to analyze purchase activity. The information sent to RevenueCat includes an anonymous App
        User ID, App Store or Google Play purchase information (receipts, purchase tokens, and purchase history), entitlement status, technical
        information about the app, OS, and device, the time of last use, and the like. The App does not set its own user ID, name, email address,
        or advertising identifier in RevenueCat.
      </p>
      <p>
        <a href="https://www.revenuecat.com/privacy/" rel="noreferrer" target="_blank">RevenueCat Privacy Policy</a>
      </p>

      <h3>PostHog (usage analytics)</h3>
      <p>
        To improve the App, we use the analytics service of PostHog, Inc. The information sent to PostHog includes: the screens viewed; app
        launches; the start and completion of focus sessions (planned time, actual time, and whether a star was lit); views of the purchase screen
        (what prompted it); the plan selected on the purchase screen; the start of the purchase process and the results of purchases and restores;
        views of the Constellation Guide and its pages (whether it was the page of a Starlit+-only constellation); saving of exam dates (the number
        of registered exams); sky-sharing actions (the number of constellations captured, the result of the share sheet, and the type of
        destination chosen); technical information about the app, OS, and device model (including whether the build is a store release or a test
        build); and an anonymous random ID generated on the device. Subject names, exam names and dates, names, email addresses, and advertising
        identifiers are not sent. We also do not record the screen or collect what you type. The shared image itself, the content of any post, and
        information about recipients are not sent to PostHog.
      </p>
      <p>
        <a href="https://posthog.com/privacy" rel="noreferrer" target="_blank">PostHog Privacy Policy</a>
      </p>

      <h3>Apple App Store and Google Play (payment)</h3>
      <p>
        In-app purchase payments are processed by Apple in the App Store version and by Google in the Google Play version. The operator does not
        obtain payment method information such as credit card numbers. Each company handles information in accordance with its own privacy policy.
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/" rel="noreferrer" target="_blank">Apple Privacy Policy</a>
        {" / "}
        <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">Google Privacy Policy</a>
      </p>

      <h2>3. Purposes of Use</h2>
      <p>Information sent to external services is used only for the following purposes.</p>
      <ul>
        <li>Providing and maintaining the App&apos;s purchase features</li>
        <li>Verifying in-app purchases, granting, renewing, and restoring purchased entitlements, and preventing fraud</li>
        <li>Compiling and analyzing purchase activity</li>
        <li>Compiling and analyzing usage of the App and improving its features</li>
      </ul>

      <h2>4. Advertising and Tracking</h2>
      <p>
        The App does not display advertising and does not use user information for delivering third-party advertising or measuring advertising
        effectiveness. It does not track users across other companies&apos; apps or websites, and it does not obtain advertising identifiers (the
        IDFA on iPhone, the advertising ID on Android).
      </p>

      <h2>5. Notifications</h2>
      <p>
        If the user enables them in the settings screen, the App, with the permission of the OS (iOS or Android), schedules timer-end and nightly
        reminder notifications on the device. The text and schedule of notifications are not sent to the operator&apos;s servers. Notifications
        can be disabled at any time from the settings screen.
      </p>

      <h2>6. Provision to Third Parties and Handling Outside Japan</h2>
      <p>
        Except to the extent necessary to provide the services above, we do not sell or provide user information to third parties. At RevenueCat
        and PostHog, information may be processed outside Japan, including in the countries where each company&apos;s servers are located (such
        as the United States).
      </p>

      <h2>7. Retention Period and Deletion</h2>
      <p>
        Data on the device can be deleted through operations in the App or by deleting the App. Information sent to external services is retained
        and deleted in accordance with each service&apos;s contract settings and privacy policy. Purchase history may be retained by Apple, Google,
        or RevenueCat for the period necessary for restoring purchases, accounting, fraud prevention, and the like. Usage analytics data is
        retained in accordance with PostHog&apos;s retention settings.
      </p>
      <p>
        External services use anonymous identifiers, so records may not be identifiable from a name or email address. For inquiries about how
        information is handled, please contact the address below.
      </p>

      <h2>8. Security Measures</h2>
      <p>
        We strive to protect information through encryption in transit, minimizing the items sent, not setting our own account information or
        advertising identifiers in external services, and similar measures.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may revise this Policy in response to changes in features, the services used, laws and regulations, and the like. Important changes
        will be announced in the App or on this page.
      </p>

      <h2>10. Contact</h2>
      <ContactAddress lang="en" />

      <h2>11. Translation</h2>
      <p>
        The Japanese text of this Policy is the governing version. If there is any discrepancy between an English or other translation and the{" "}
        <a href="/privacy-policy">Japanese version</a>, the Japanese version prevails.
      </p>
    </LegalPage>
  );
}
