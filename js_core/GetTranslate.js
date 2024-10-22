export const GetTranslate = ( page, group='', key = '',  replace = {}) =>
{
    if (group != '')
    {
        var translation = (page.props.localeTranslatePage[group] && page.props.localeTranslatePage[group][key]
            ? page.props.localeTranslatePage[group][key]
            : (page.props.localeTranslateGroup[group] && page.props.localeTranslateGroup[group][key]
                ? page.props.localeTranslateGroup[group][key]
                : (page.props.localeTranslateGlobal[group] && page.props.localeTranslateGlobal[group][key]
                    ? page.props.localeTranslateGlobal[group][key]
                    : key
                )
            )
        );
    }
    else
    {
        var translation = (page.props.localeTranslatePage[key]
            ? page.props.localeTranslatePage[key]
            : (page.props.localeTranslateGroup[key]
                ? page.props.localeTranslateGroup[key]
                : (page.props.localeTranslateGlobal[key]
                    ? page.props.localeTranslateGlobal[key]
                    : key
                )
            )
        );
    }

    Object.keys(replace).forEach(function (key)
    {
        translation = translation.replace(':' + key, replace[key]);
    });

    return translation;
}

export const languages =
[
    {
      lang: "en",
      name: "English",
    },
    {
      lang: "ru",
      name: "Russian",
    }
];
