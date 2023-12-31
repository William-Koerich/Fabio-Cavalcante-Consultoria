import * as S from "./style"
import { Customer } from "@/assets"

export function Partners() {
    return (
        <S.PartnersContainer id="partners">
            <S.PartnerItem>
                <Customer />
            </S.PartnerItem>
            <S.PartnerItem>
                <Customer />
            </S.PartnerItem>
            <S.PartnerItem>
                <Customer />
            </S.PartnerItem>
            <S.PartnerItem>
                <Customer />
            </S.PartnerItem>
            <S.PartnerItem>
                <Customer />
            </S.PartnerItem>
        </S.PartnersContainer>
    )
}
  