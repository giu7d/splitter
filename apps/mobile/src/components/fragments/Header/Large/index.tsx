import HeaderLargeCallout from './HeaderLargeCallout'
import HeaderLargeCashback from './HeaderLargeCashback'
import HeaderLargeProfileImage from './HeaderLargeProfileImage'
import HeaderLargeRoot from './HeaderLargeRoot'

/**
 * @module
 * Header.Large
 *
 * @example
 *  <HeaderLargeRoot renderExtension={children}>
 *    <HeaderLargeCashback
 *      cashbackTotal={data.cashback.total}
 *      controlValue={isScrolled}
 *    >
 *      {(renderCashbackText) => (
 *         <>
 *           <HeaderLargeProfile
 *             uri={data.photo}
 *             controlValue={isScrolled}
 *             onPress={onOpenProfile}
 *           />
 *           <View className="gap-1">
 *             <View>
 *               <HeaderLargeCallout controlValue={isScrolled}>
 *                   {data.firstName} {data.lastName}
 *               </HeaderLargeCallout>
 *             </View>
 *             <View>{renderCashbackText()}</View>
 *           </View>
 *        </>
 *      )}
 *    </HeaderLargeCashback>
 *  </HeaderLargeRoot>
 *
 */
export default {
  Root: HeaderLargeRoot,
  ProfileImage: HeaderLargeProfileImage,
  Cashback: HeaderLargeCashback,
  Callout: HeaderLargeCallout
}
