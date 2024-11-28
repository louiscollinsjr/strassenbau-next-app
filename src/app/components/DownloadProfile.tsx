import ButtonLink, { DownloadIcon } from './ButtonLink';

export default function DownloadProfile() {
    return (
        <div className="mx-auto py-2">
            <ButtonLink
                href="/Company Profile STRASSEN UND BRUECKENBAU SRL.pdf"
                target="_blank"
                icon={<DownloadIcon />}
            >
                Download Company Profile
            </ButtonLink>
        </div>
    );
}
